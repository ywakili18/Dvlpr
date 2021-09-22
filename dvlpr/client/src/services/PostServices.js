import Client from './api'

export const GetPosts = async () => {
  try {
    const res = await Client.get('/posts')
    return res.data
  } catch (err) {
    throw err
  }
}

export const NewPost = async (newPost) => {
  try {
    const res = await Client.post('/createPost', newPost)
    return res.data
  } catch (err) {
    throw err
  }
}

export const DeletePost = async (postId) => {
  try {
    const res = await Client.delete(`/${postId}`)
  } catch (err) {
    throw err
  }
}
