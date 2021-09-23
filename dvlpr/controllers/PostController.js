const { User, Post, Comment } = require('../models')

const GetPosts = async (req, res) => {
  try {
    const posts = await Post.findAll({
      include: [
        {
          model: Comment,
          as: 'postsAndComments',
          include: [
            {
              model: User,
              as: 'commentsAndUsers',
              attributes: ['id', 'userName']
            }
          ]
        }
      ]
    })

    res.send(posts)
  } catch (error) {
    throw error
  }
}
const CreatePost = async (req, res) => {
  try {
    console.log(req.params)
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
const GetPostById = async (req, res) => {
  try {
    let postId = req.params.postId
    let post = await Post.findByPk(postId)
    res.send(post)
  } catch (error) {
    throw error
  }
}
const UpdatePostById = async (req, res) => {
  try {
    let updatedPost = await Post.update(req.body, {
      where: { id: req.params.postId },
      returning: true
    })
    res.send(updatedPost)
  } catch (error) {
    throw error
  }
}

const DeletePost = async (req, res) => {
  try {
    let postId = parseInt(req.params.postId)
    await Post.destroy({ where: { id: postId } })
    res.send({ message: `Deleted post with an id of ${postId}` })
  } catch (error) {
    throw error
  }
}
module.exports = {
  GetPosts,
  CreatePost,
  GetPostById,
  UpdatePostById,
  DeletePost
}
