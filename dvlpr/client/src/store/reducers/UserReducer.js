import { LOGIN_USER } from '../types'
import { LoginUser } from '../actions/UserActions'

const iState = {
  user: null,
  authenticated: false
}

const UserReducer = (state = iState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, user: action.payload }
  }
}

export default UserReducer
