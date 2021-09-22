import { GET_POSTS, NEW_POST } from '../types'

const iState = {
  posts: [],
  newPost: {
    userId: null,
    postContent: ''
  }
}

const PostReducer = (state = iState, action) => {
  switch (action.type) {
    case GET_POSTS:
      return { ...state, posts: action.payload }
    case NEW_POST:
      return { ...state, newPost: action.payload }
    default:
      return { ...state }
  }
}

export default PostReducer
