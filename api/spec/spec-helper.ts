import supertest from 'supertest'

import { app } from '../src/app'

export const apiRequest = supertest(app)
