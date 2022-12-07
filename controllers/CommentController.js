const { User, Event, Comment, Sequelize } = require('../models')
const { Op, QueryTypes } = require('sequelize')

// query string implemented on 12/5 3:53 est 
const FindComments = async (req, res) => {
  try {
    const where = {};
    //query params
    const {id, userId, eventId, body} = req.query;
    if(id) where.id = {[Op.like]: `%${id}%`}
    if(userId) where.userId = {[Op.like]: `%${userId}%`}
    if(eventId) where.eventId = {[Op.like]: `%${eventId}%`}
    if(body) where.body = {[Op.like]: `%${body}%`}

    const results = await Comment.findAll({
      order: [["date", "asc"]],
    where: {
      ...where
    }
    })
    res.send(results)
  } catch (error) {
    throw error
  }
}

const GetCommentByEvent = async (req, res) => {
  try {
    const result = await Comment.findAll({
      where: {eventId: req.params.eventId},
      include: [{
        model: User,
        as: "user",
        attributes: ['id','username']
      }]
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
  GetCommentByEvent,
  CreateComment,
  UpdateComment,
  DeleteComment
}