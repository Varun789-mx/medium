import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { sign } from "hono/jwt";
import bcrypt from "bcryptjs";
import { z } from "zod";
import { startTime } from "hono/timing";

const User_schema = z.object({
  name: z
    .string({ error: "Name should be a string" })
    .min(3, { error: "Name should be atleast 3 characters long" }),
  email: z.email(),
  password: z
    .string()
    .min(5, { error: "Password should be atleast 5 characters long" }),
});

export const userRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
  Variables: {
    userid: string;
  };
}>();

userRouter.post("/signin", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env?.DATABASE_URL,
  }).$extends(withAccelerate());
  const body = await c.req.json();
  const signin_schema = User_schema.pick({ email: true, password: true });
  const parseduser = signin_schema.safeParse(body);
  if (!parseduser.success) {
    c.status(400);
    return c.json({ Error: "Error in input " });
  }
  try {
    const GetUser = await prisma.user.findUnique({
      where: { email: parseduser.data.email.toLowerCase() },
    });

    if (!GetUser) {
      c.status(401);
      return c.json({
        Error: "Incorrect password or email" + parseduser.error,
        status: 401,
      });
    }
    const isValidpassword = await bcrypt.compare(
      parseduser.data.password,
      GetUser.password
    );
    if (!isValidpassword || !GetUser) {
      c.status(401);
      return c.json({
        error: "Incorrect password",
      });
    }

    const jwt = await sign(
      { id: GetUser.id, email: GetUser.email.toLowerCase() },
      c.env.JWT_SECRET
    );
    return c.json({
      token: "Bearer " + jwt,
      status: 200,
    });
  } catch (error) {
    c.status(500);
    return c.json({ Error: "Internal server error" + error });
  } finally {
    await prisma.$disconnect();
  }
});

userRouter.post("/signup", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env?.DATABASE_URL,
  }).$extends(withAccelerate());
  try {
    const body = await c.req.json();
    const parseduser = User_schema.safeParse(body);
    if (!parseduser.success) {
      c.status(400);
      return c.json({ Error: "Error in input " + parseduser.error });
    }
    const hashedpassword = await bcrypt.hash(parseduser.data.password, 12);
    const finduser = await prisma.user.findUnique({
      where: { email: parseduser.data.email.toLowerCase() },
    });
    if (!finduser) {
      const user = await prisma.user.create({
        data: {
          email: parseduser.data.email.toLowerCase(),
          name: parseduser.data.name.toLowerCase(),
          password: hashedpassword,
        },
      });
      const jwt = await sign(
        { id: user.id, email: user.email.toLowerCase() },
        c.env.JWT_SECRET
      );
      return c.json({
        token: "Bearer " + jwt,
        status: 200,
      });
    } else {
      c.status(409);
      return c.json({ Error: "User already exists" });
    }
  } catch (error) {
    c.status(408);
    return c.json({
      Error: "Error in creating the user" + error,
    });
  }
  finally {
    await prisma.$disconnect();
  }
});
userRouter.get("/Allblogs", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env?.DATABASE_URL,
  }).$extends(withAccelerate());
  try {
    const posts = await prisma.post.findMany({
      where: {
        published: true,
      },
    });
    if (!posts) {
      c.status(404);
      return c.json({
        Error: "Server issue",
      });
    } else {
      c.status(200);
      return c.json({
        data: posts,
      });
    }
  } catch (error) {
    c.status(404);
    return c.json({ Error: "Error in getting posts " + error });
  }
  finally {
    await prisma.$disconnect();
  }
});

export default userRouter;
