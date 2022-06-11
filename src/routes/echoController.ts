import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from 'fastify'

export interface IEchoRequestQueryString {
  message: string
}

export interface IEchoResponse {
  message: string
}

export default (fastify: FastifyInstance, opts: FastifyPluginOptions, done: Function) => {
  // require all requests to this controller to be authenticated
  fastify.addHook('preHandler', (fastify as any).auth([
    (fastify as any).verifyCredentials
  ]))

  fastify.log.info('Adding echo api routes')
  fastify.get<{
    Querystring: IEchoRequestQueryString,
    Reploy: IEchoResponse
  }>('/query', async (request: FastifyRequest, reply: FastifyReply) => {
    const queryString: IEchoRequestQueryString = request.query as IEchoRequestQueryString
    const response: IEchoResponse = {
      message: queryString.message
    }
    reply.send(response)
  })

  done()
}
