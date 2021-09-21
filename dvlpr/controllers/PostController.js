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
    // const userAndPosts = await User.find({ include: Post })
    res.send(postsAndComments)
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetPosts,
  GetPostsandComments
}
