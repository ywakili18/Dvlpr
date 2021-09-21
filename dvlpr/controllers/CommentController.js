const { User, Post, Comment } = require('../models')

const GetComment = async (req, res) => {
  try {
    const comments = await Comment.findAll()
    res.send(comments)
  } catch (error) {
    throw error
  }
}
const CreateComment = async (req, res) => {
  try {
    let commentCreator = parseInt(req.params.userId)
    let commentBody = {
      commentCreator,
      ...req.body
    }
    let comment = await Comment.create(commentBody)
    res.send(comment)
  } catch (error) {
    throw error
  }
}
const GetCommentById = async (req, res) => {
  try {
    let commentId = req.params.commentId
    let comment = await Comment.findByPk(commentId)
    res.send(comment)
  } catch (error) {
    throw error
  }
}
const UpdateCommentById = async (req, res) => {
  try {
    let commentCreator = req.params.commentId
    let updatedComment = await Comment.update(req.body, {
      where: { id: commentCreator },
      returning: true
    })
    res.send(updatedComment)
  } catch (error) {
    throw error
  }
}

const DeleteComment = async (req, res) => {
  try {
    let commentId = parseInt(req.params.commentId)
    await Comment.destroy({ where: { id: commentId } })
    res.send({ message: `Deleted post with an id of ${commentId}` })
  } catch (error) {
    throw error
  }
}
module.exports = {
  CreateComment,
  GetComment,
  GetCommentById,
  UpdateCommentById,
  DeleteComment
}
