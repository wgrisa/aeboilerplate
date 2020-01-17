import errorMiddleware from 'error-middleware'
import express from 'express'

import { me } from '../me/api'

const router = express.Router()

router.use(me)
router.use(errorMiddleware)

export const routes = router
