const { User, Event, Comment } = require('../models')

// needs query string implemented
const FindComments = async (req, res) => {
  try {
    const result = await Comment.findAll()
    res.send(result)
  } catch (error) {
    throw error
  }
}

const GetComment = async (req, res) => {
  try {
    const result = await Comment.findAll({
      where: {id: req.params.eventId}
    })
    res.send(result)
  } catch (error) {
    throw error
  }
}

const CreateComment = async (req, res) => {
  try {
    const updatedComment = await Comment.create(req.body)
    res.send(updatedComment)
  } catch (error) {
    throw error
  }
}

const UpdateComment = async (req, res) => {
  try {
    const updatedComment = await Comment.update(
      req.body,
      {
        where: { commentId: req.params.commentId },
        returning: true
      }
    )
    res.send(updatedComment)
  } catch (error) {
    throw error
  }
}

const DeleteComment = async (req, res) => {
  try {
    const deletedComment = await Comment.destroy({
      where: {id: req.params.commentId},
      trunicate: true
    })
    res.send(deletedComment)
  } catch (error) {
    throw error
  }
} 

module.exports = {
  FindComments,
  GetComment,
  CreateComment,
  UpdateComment,
  DeleteComment
}