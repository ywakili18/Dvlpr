const { User, Post } = require('../models')

const GetPosts = async (req, res) => {
  try {
    const posts = await Post.findAll()
    res.send(post)
  } catch (error) {
    throw error
  }
}

const GetUserProfile = async (req, res) => {
  try {
    const userAndPosts = await User.findByPk(req.params.user_id, {
      include: [{ model: Post, as: 'posts' }]
    })
    res.send(userAndPosts)
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetProfiles,
  GetUserProfile
}
