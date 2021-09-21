import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import UserReducer from './reducers/UserReducer'

const store = createStore(
  combineReducers({
    userState: UserReducer
  }),
  composeWithDevTools(applyMiddleware(thunk))
)

export default store
