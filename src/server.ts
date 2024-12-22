import fastify from 'fastify'
import { routes } from './router/main.js'
import cors from '@fastify/cors'

export const app = fastify()

app.register(routes)
app.register(cors, {})

const port = Number.parseInt(process.env.PORT || '3000')

app.listen({ port: port }, (error, address) => {
  if (error) {
    console.log(error)
  }
  console.log(`Server is running on ${address}`)
})
