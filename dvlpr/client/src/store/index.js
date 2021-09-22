import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import UserReducer from './reducers/UserReducer'
import PostReducer from './reducers/PostReducer'

const store = createStore(
  combineReducers({
    userState: UserReducer,
    postState: PostReducer
  }),
  composeWithDevTools(applyMiddleware(thunk))
)

export default store
