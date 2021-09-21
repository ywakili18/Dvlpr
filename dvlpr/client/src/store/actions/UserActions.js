import { LOGIN_USER, AUTHENTICATE_TOGGLE } from '../types'

export const LoginUser = (user) => ({
  type: LOGIN_USER,
  payload: user
})

export const authenticateUser = (toggle) => ({
  type: AUTHENTICATE_TOGGLE,
  payload: toggle
})
