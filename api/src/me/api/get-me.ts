import { Request, Response } from 'express'

import { getMe } from '../services/get-me'

export const fetchMe = async (req: Request, res: Response) => {
  const user = await getMe()

  return res.send(user)
}
