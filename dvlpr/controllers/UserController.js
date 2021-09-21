const { User, Post, Comment } = require('../models')

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
    const userAndPosts = await User.findByPk(req.params.userId, {
      include: {
        model: Post,
        as: 'userAndPosts'
      }
    })
    // const userAndPosts = await User.find({ include: Post })
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
