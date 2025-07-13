import { Hono } from 'hono'
import { PrismaClient } from  '../generated/prisma/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { sign, verify } from 'hono/jwt'
import bcrypt from 'bcryptjs';

export const userRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string
    JWT_SECRET: string
  },
  Variables: {
    userid: string,
  }
}>();

userRouter.post('/signin', async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env?.DATABASE_URL,
  }).$extends(withAccelerate());
  const body = await c.req.json();
  try {
    const GetUser = await prisma.user.findUnique({
      where: { email: body.email }
    });
    if (!GetUser) {``
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

userRouter.post('/signup', async (c) => {
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

export default userRouter
