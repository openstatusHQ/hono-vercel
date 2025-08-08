import { Hono } from 'hono'

const app = new Hono()

const welcomeStrings = [
  'Hello Hono on Vercel!',
  'Trying something for https://www.openstatus.dev'
]

app.get('/', (c) => {
  return c.text(welcomeStrings.join('\n\n'))
})

export default app
