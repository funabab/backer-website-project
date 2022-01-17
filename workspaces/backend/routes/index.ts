import type { Express } from 'express'
import ApiRoute from './api'

export const setupRoutes = (app: Express) => {
  app.use('/api', ApiRoute)
}
