import { GetPosts, NewPost } from '../../services/PostServices'
import { GET_POSTS, NEW_POST } from '../types'

export const LoadPosts = () => {
  return async (dispatch) => {
    try {
      const posts = await GetPosts()
      dispatch({
        type: GET_POSTS,
        payload: posts
      })
    } catch (err) {
      throw err
    }
  }
}

export const CreatePost = (newPost) => {
  return async (dispatch) => {
    try {
      const post = await NewPost(newPost)
    } catch (err) {
      throw err
    }
  }
}

export const NewPostState = (post) => ({
  type: NEW_POST,
  payload: post
})
