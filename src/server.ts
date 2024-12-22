import fastify from 'fastify'
import { routes } from './router/main'
import cors from '@fastify/cors'

export const app = fastify()

app.register(routes)
app.register(cors, {})

app.listen({ port: 3000 }, (error, address) => {
  if (error) {
    console.log(error)
  }
  console.log('Server running on port 3000')
})
