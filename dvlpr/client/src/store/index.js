import { createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import UserReducer from './reducers/UserReducer'

const store = createStore(
  combineReducers({
    userState: UserReducer
  }),
  composeWithDevTools()
)

export default store
