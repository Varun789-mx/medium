import { Hono } from "hono";
import { PrismaClient } from "../generated/prisma/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { verify } from "hono/jwt";

const blogRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string;
        JWT_SECRET: string;
    };
    Variables: {
        userid: string;
    };
}>();

blogRouter.use("*", async (c, next) => {
    try {
        const header = c.req.header("AUTHORIZATION") || "";
        if (!header.startsWith("Bearer ")) {
            c.status(404);
            return c.json({
                msg: "missing or invalid header",
            });
        }

        const Usertoken = header.split(" ")[1];

        const verifyHeader = await verify(Usertoken, c.env.JWT_SECRET);
        if (!verifyHeader) {
            c.status(401);
            return c.json({ Error: "Incorrect credentials" });
        }

        const payload = verifyHeader as any;

        const userid = payload.id;

        if (!userid) {
            c.status(401);
            return c.json({ Error: "User id not found in token" });
        }
        c.set("userid", userid);
        await next();
    } catch (error) {
        c.status(500);
        return c.json("Internal Error" + error);
    }
});

blogRouter.get("/test", (c) => {
    const userid = c.get("userid");
    return c.json({
        Error: "We did it ",
        ID: userid
    });
})


blogRouter.post("/add", async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env?.DATABASE_URL,
    }).$extends(withAccelerate());
    try {
        const userid = c.get("userid");
        const body = await c.req.json();
        const post = await prisma.post.create({
            data: {
                title: body.title,
                content: body.content,
                author: {
                    connect: { id: userid }
                }
            }
        });
        if (!post) {
            c.status(404);
            return c.json({ Error: "error in creating post" })
        }
        return c.json({
            id: post.id,
        });
    } catch (error) {
        c.status(404);
        return c.json({
            Error: "Some random error" + error
        })
    }
});

export default blogRouter;
