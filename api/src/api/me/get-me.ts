import { getMe } from '../../services/me/get-me'

export const fetchMe = async (_req, res) => {
  const user = await getMe()

  return res.status(200).send(user)
}
