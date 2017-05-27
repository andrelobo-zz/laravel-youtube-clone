/**
 * Authentication
 */
export const apiToken = ({ api }) => {
  return api.authentication.token
}
export const authenticated = ({ api }) => {
  return !!api.authentication
}

/**
 * User
 */
export const profile = ({ user }) => {
  return user.profile
}

/**
 * Video
 */
export const videos = ({ video }) => {
  return video.all
}
export const video = ({ video }) => {
  return video.single
}
