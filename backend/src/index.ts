import { Hono } from 'hono'
import { PrismaClient } from './generated/prisma/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { sign, verify } from 'hono/jwt'
import bcrypt from 'bcryptjs';
import userRouter from './routes/user';
import blogRouter from './routes/blog';

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


app.route('/api/v1/user', userRouter);
app.route('/api/v1/blog', blogRouter);

export default app;
