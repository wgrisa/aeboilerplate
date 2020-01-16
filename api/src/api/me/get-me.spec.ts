import { apiRequest } from '../../../spec/spec-helper'

describe('get me', () => {
  it('returns user info', async () => {
    const { status } = await apiRequest.get('/api/me')

    expect(status).toEqual(200)
  })
})
