import supertest from 'supertest'

import { app } from '../src/app'

const apiRequest = supertest(app)

export { apiRequest }
