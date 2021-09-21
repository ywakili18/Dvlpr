import { LOGIN_USER } from '../types'

export const LoginUser = (user) => ({
  type: LOGIN_USER,
  payload: user
})
