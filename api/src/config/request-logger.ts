import { NextFunction, Request, Response } from 'express'
import httpContext from 'express-http-context'
import { Application } from 'express-serve-static-core'
import morgan from 'morgan'
import uuid from 'node-uuid'

const requestStamp = '[:date[iso] #:id]'

export const initializeRequestLogger = (app: Application) => {
  setupRequestId(app)
  addMorganTokens()
  logOptionRequests(app)
  logNonOptionRequests(app)
}

const setupRequestId = (app: Application) => {
  app.use(httpContext.middleware)

  app.use((req: Request, res: Response, next: NextFunction) => {
    httpContext.set('reqId', uuid.v1())
    next()
  })
}

const addMorganTokens = () => {
  morgan.token('id', () => {
    const reqId = httpContext.get('reqId')

    return (reqId || '').split('-')[0]
  })
  morgan.token('json-body', (req: Request) => JSON.stringify(req.body))
  morgan.token('json-query', (req: Request) => JSON.stringify(req.query))
}

const nonOptionRequests = (req: Request) => req.method !== 'OPTIONS'
const logOptionRequests = (app: Application) => {
  app.use(
    morgan(`${requestStamp} Completed :method :url for :remote-addr with :status in :response-time ms`, {
      skip: nonOptionRequests,
    }),
  )
}

const optionRequests = (req: Request) => req.method === 'OPTIONS'
const logNonOptionRequests = (app: Application) => {
  app.use(
    morgan(`${requestStamp} Started :method :url for :remote-addr Query: :json-query Body: :json-body`, {
      immediate: true,
      skip: optionRequests,
    }),
  )
  app.use(
    morgan(`${requestStamp} Completed :status in :response-time ms`, {
      skip: optionRequests,
    }),
  )
}
