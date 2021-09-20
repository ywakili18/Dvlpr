const { User, Post } = require('../models')

const GetProfiles = async (req, res) => {
  try {
    const users = await User.findAll()
    res.send(users)
  } catch (error) {
    throw error
  }
}

const GetUserProfile = async (req, res) => {
  try {
    const userAndPosts = await User.findByPk(
      req.params.user_id /*, {
      include: [{ model: Post, as: 'posts' }]
    }*/
    )
    res.send(userAndPosts)
  } catch (error) {
    throw error
  }
}

const CreateUser = async (req, res) => {
  try {
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetProfiles,
  GetUserProfile,
  CreateUser
}
