import { FastifyInstance } from 'fastify'

export default class RouteRegistrator {
  static configureRoutes (fastify: FastifyInstance) {
    fastify.register(require('../routes/echoController'), { prefix: '/api/echo/v1' })
  }
}
