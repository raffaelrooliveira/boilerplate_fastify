import type { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify'

export async function routes(app: FastifyInstance) {
  app.get('/', (request: FastifyRequest, reply: FastifyReply) => {
    return reply.status(200).send('Hello Raffa')
  })
}
