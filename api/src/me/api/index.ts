import express from 'express'
import asyncHandler from 'express-async-handler'

import { fetchMe } from './get-me'

const router = express.Router()

router.get('/me', asyncHandler(fetchMe))

export const me = router
