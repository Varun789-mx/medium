import { Hono } from "hono";
import { withAccelerate } from "@prisma/extension-accelerate";
import { PrismaClient } from "@prisma/client/edge";
import userRouter from "./routes/user";
import blogRouter from "./routes/blog";
import { cors } from "hono/cors";

interface blog {
  title: string;
  picture?: string;
  content?: string;
  published: boolean;
  authorid?: string;
}
const app = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
  Variables: {
    userid: string;
  };
}>();
app.use(cors());
app.get("/", (c) => {
  return c.text("Hello Hono!");
});

app.route("/api/v1/user", userRouter);
app.route("/api/v1/blog", blogRouter);

app.get("/Allblogs", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env?.DATABASE_URL,
  }).$extends(withAccelerate());

  try {
    if (!prisma) {
      c.status(405);
      return c.json({
        Error: c.env?.DATABASE_URL,
      });
    }
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
});

export default app;
