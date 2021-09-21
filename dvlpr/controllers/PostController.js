const { User, Post, Comment } = require('../models')

const GetPosts = async (req, res) => {
  try {
    const posts = await Post.findAll()
    res.send(posts)
  } catch (error) {
    throw error
  }
}

const GetPostsandComments = async (req, res) => {
  try {
    const postsAndComments = await Post.findByPk(req.params.postId, {
      include: {
        model: Comment,
        as: 'postsAndComments'
      }
    })

    res.send(postsAndComments)
  } catch (error) {
    throw error
  }
}
const CreateUser = async (req, res) => {
  try {
    let postCreator = parseInt(req.params.userId)
    let postBody = {
      postCreator,
      ...req.body
    }
    let post = await Post.create(postBody)
    res.send(post)
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetPosts,
  GetPostsandComments,
  CreateUser
}
