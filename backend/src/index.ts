import { Hono } from 'hono'
import { PrismaClient } from './generated/prisma/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { sign, verify } from 'hono/jwt'
import bcrypt from 'bcryptjs';

const app = new Hono<{
  Bindings: {
    DATABASE_URL: string
    JWT_SECRET: string
  },
  Variables: {
    userid: string,
  }
}>();
app.get('/', (c) => {
  return c.text('Hello Hono!')
})


app.post('/api/v1/blog/*', async (c, next) => {
  try {
    const header = c.req.header('AUTHORIZATION') || "";
    if (!header.startsWith('Bearer ')) {
      c.status(404);
      return c.json({
        msg: "missing or invalid header",
      })
    }
    const Usertoken = header.split(" ")[1];
    const verifyHeader = await verify(Usertoken, c.env.JWT_SECRET);
    if (!verifyHeader) {
      c.status(401);
      return c.json({ Error: "Incorrect credentials" });
    }

    c.set("userid", Usertoken);
    await next()
  }
  catch (error) {
    c.status(500);
    return c.json("Internal Error" + error);
  }
})
app.post('/api/v1/signin', async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env?.DATABASE_URL,
  }).$extends(withAccelerate());
  const body = await c.req.json();
  try {
    const GetUser = await prisma.user.findUnique({
      where: { email: body.email }
    });
    if (!GetUser) {
      c.status(404)
      return c.json({
        Error: "Incorrect password or email"
      });
    }
    const isValidpassword = await bcrypt.compare(body.password, GetUser.password);
    if (isValidpassword) {
      const jwt = await sign({ id: GetUser.id, email: GetUser.email }, c.env.JWT_SECRET);
      return c.json({
        token: "Bearer " + jwt,
        message: "User succesfully logged in"
      });
    }
    else {
      c.status(401);
      return c.json({ Error: "Incorrect password" });
    }
  }
  catch (error) {
    c.status(500);
    return c.json({ Error: "Internal server error" + error });
  }
});

app.post('/api/v1/signup', async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env?.DATABASE_URL,
  }).$extends(withAccelerate());
  const body = await c.req.json();
  try {
    const hashedpassword = await bcrypt.hash(body.password, 12);
    const finduser = await prisma.user.findUnique({
      where: { email: body.email }
    })
    if (!finduser) {
      const user = await prisma.user.create({
        data: {
          email: body.email,
          name: body.name,
          password: hashedpassword
        }
      }
      )
      const jwt = await sign({ id: user.id, email: user.email }, c.env.JWT_SECRET);
      return c.json({
        token: "Bearer " + jwt,
        message: "User succesfully signed up"
      });
    }
    else {
      c.status(404);
      return c.json({ Error: "User already exists" });
    }
  }
  catch (error) {
    c.status(408);
    return c.json({
      Error: "Error in creating the user" + error
    });
  }

})

app.put('/api/v1/blog', (c) => {
  return c.text('Put blog')
})
app.get('/api/v1/blog:id', (c) => {
  const id = c.req.param('id')
  return c.text(`You requested for the ${id} blog`);
});
export default app
