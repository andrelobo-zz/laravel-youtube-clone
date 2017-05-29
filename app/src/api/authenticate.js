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
    client_secret: 'XluVecXnXXW0rbdwx9ji86WtdlbQyMVnwcZuQjLS',
    scope: '',
    username,
    password
  })
}
