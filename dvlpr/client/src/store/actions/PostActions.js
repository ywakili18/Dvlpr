import { GetPosts, NewPost } from '../../services/PostServices'
import { GET_POSTS, NEW_POST } from '../types'

export const LoadPosts = () => {
  return async (dispatch) => {
    try {
      const posts = await GetPosts()
      console.log(posts)
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
    const post = await NewPost(newPost)
    dispatch()
  }
}