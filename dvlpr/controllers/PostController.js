const { User, Post } = require('../models')

const GetPosts = async (req, res) => {
  try {
    const posts = await Post.findAll()
    res.send(posts)
  } catch (error) {
    throw error
  }
}

const GetPostDetails = async (req, res) => {
  try {
    const userAndPosts = await Post.findByPk(
      req.params.post_id /*, {
      include: [{ model: User, as: 'user' }]
    }*/
    )
    res.send(userAndPosts)
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetPosts,
  GetPostDetails
}
