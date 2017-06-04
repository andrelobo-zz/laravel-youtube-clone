import { API } from './'

/**
 * Get top categories
 */
export const getTopCategories = async () => {
  return API.get('/api/categories/top')
}

/**
 * Find categories
 */
export const findCategories = async (name) => {
  return API.get(`/api/categories/find?name=${name}`)
}
