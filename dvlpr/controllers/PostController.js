const { User, Post } = require('../models')

const GetPosts = async (req, res) => {
  try {
    const posts = await Post.findAll()
    res.send(posts)
  } catch (error) {
    throw error
  }
}

const GetUserProfile = async (req, res) => {
  try {
    const userAndPosts = await User.findByPk(req.params.userId, {
      include: [{ model: Post, as: 'posts' }]
    })
    res.send(userAndPosts)
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetPosts,
  GetUserProfile
}
