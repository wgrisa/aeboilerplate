import { db } from '../../knex-connection'

export const ensureAuthenticated = async (req, res, next) => {
  const token = req.session.passport && req.session.passport.user.token

  if (token) {
    const validToken = await db('auth_tokens')
      .where({ token })
      .first()

    if (validToken.status === 'active') {
      return next()
    }

    res.sendStatus(401)
  }

  res.sendStatus(401)
}
