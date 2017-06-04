import { API } from './'

/**
 * Authenticate user
 * @param username
 * @param password
 * @return {Promise}
 */
export const authenticate = async (username, password) => {
  return API.post(`/oauth/token`, {
    grant_type: 'password',
    client_id: '2',
    client_secret: 'lqk9GexiDmIb0bMayWgEna4otIFEqY1ApK0a4nXZ',
    scope: '',
    username,
    password
  })
}
