import { API } from './'

/**
 * Get current authenticated user's profile
 */
export const getTopCategories = async () => {
  return API.get('/api/categories/top')
}
