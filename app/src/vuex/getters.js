/**
 * Authentication
 */
export const apiToken = ({ api }) => {
  return api.authentication ? api.authentication.token : null
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
export const user = ({ user }) => {
  return user.single
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

/**
 * Alerts
 */
export const alerts = ({ alert }) => {
  return alert.all
}
