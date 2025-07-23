import { Hono } from 'hono'
import { PrismaClient } from '../generated/prisma/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { sign } from 'hono/jwt'
import bcrypt from 'bcryptjs';
import { z } from "zod";

const User_schema = z.object({
  name: z.string({ error: "Name should be a string" }).min(3, { error: "Name should be atleast 3 characters long" }),
  email: z.email(),
  password: z.string().min(8, { error: "Password should be atleast 8 characters long" })
})


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
  }).$extends(withAccelerate())
  const body = await c.req.json();
  const signin_schema = User_schema.pick({ email: true, password: true });
  const parseduser = signin_schema.safeParse(body);
  if (!parseduser.success) {
    c.status(400);
    return c.json({ Error: "Error in input " })
  }
  try {
    const GetUser = await prisma.user.findUnique({
      where: { email: parseduser.data.email }
    });

    if (!GetUser) {
      c.status(404)
      return c.json({
        Error: "Incorrect password or email" + parseduser.error,
      });
    }
    const isValidpassword = await bcrypt.compare(parseduser.data.password, GetUser.password);
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
  try {
    const body = await c.req.json();
    const parseduser = User_schema.safeParse(body);
    if (!parseduser.success) {
      c.status(400);
      return c.json({ Error: "Error in input "+ parseduser.error })

    }
    const hashedpassword = await bcrypt.hash(parseduser.data.password, 12);
    const finduser = await prisma.user.findUnique({
      where: { email: parseduser.data.email }
    })
    if (!finduser) {
      const user = await prisma.user.create({
        data: {
          email: parseduser.data.email,
          name: parseduser.data.name,
          password: hashedpassword
        }
      })
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