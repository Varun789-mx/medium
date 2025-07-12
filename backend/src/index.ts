import { Hono } from 'hono'
import { PrismaClient } from './generated/prisma/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { sign } from 'hono/jwt'

const app = new Hono<{
  Bindings: {
    DATABASE_URL: string
    JWT_SECRET: string
  }
}>();
app.get('/', (c) => {
  return c.text('Hello Hono!')
})
app.get('/test-db', async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env?.DATABASE_URL,
  }).$extends(withAccelerate());
  
  try {
    const userCount = await prisma.user.count();
    return c.json({ userCount });
  } catch (error) {
    return c.json({ error: (error as Error).message }, 500);
  }
});

app.post('/api/v1/signup', async (c) => {
  const prisma =  new PrismaClient({
    datasourceUrl: c.env?.DATABASE_URL,
  }).$extends(withAccelerate());
  const body = await c.req.json();
  try {
    const user = await prisma.user.create({
      data: {
        email: body.email,
        name: body.name,
        password: body.password
      }
    }
    )
    const jwt = await sign({ id: user.id }, c.env.JWT_SECRET);
    return c.json({ jwt });
  }
  catch (error) {
    c.status(408);
    return c.json({
      Error: "Error in creating the user" + error
    });
  }

})

app.post('/api/v1/blog', (c) => {
  return c.text('blog route')
})
app.post('/api/v1/signup', (c) => {
  return c.text('Signup route')
})
app.put('/api/v1/blog', (c) => {
  return c.text('Put blog')
})
app.get('/api/v1/blog:id', (c) => {
  const id = c.req.param('id')
  return c.text(`You requested for the ${id} blog`);
});
export default app
