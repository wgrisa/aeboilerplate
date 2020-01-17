import { Express } from 'express-serve-static-core'

import { routes } from './routes'

export const loadApiRoutes = (app: Express) => {
  app.use('/api', routes)
}
