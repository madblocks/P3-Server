const { User, Event, Comment} = require('../models')

const FindUser = async (req, res) => {
  try {
    const result = await User.findAll({
      where: {username: req.params.username},
      include: [{
        model: Event,
        as: 'events'
      },
      {
        model: Event,
        as: 'likedEvents',
        attributes: ['id'],
        through: {attributes: []}
      },
      {
        model: Comment, 
        as:"likedComment",
        attributes: ['id'],
        through: {attributes: []}
      },
      {
        model: Comment, 
        as:"likedComment",
        attributes: ['id'],
        through: {attributes: []}
      }
    ]
    })
    res.send(result)
  } catch (error) {
    throw error
  }
}

const GetLikedEvents = async (req, res) => {
  try {
    const result = await User.findAll(
      {
        where: {username: req.params.username},
        attributes: ['id', 'username'],
        include: [{
          model: Event,
          as: 'likedEvents',
          attributes: ['id','name','date','description'],
          through: {attributes: []},
        }]
      }  
    )
    res.send(result)
  } catch (error) {
    throw error
  }
}

const CreateUser = async (req, res) => {
  try {
    const user = await User.create(req.body)
    res.send(user)
  } catch (error) {
    throw error
  }
}

const UpdateUser = async (req, res) => {
  try {
    const updatedUser = await User.update(
      req.body,
      {
        where: { username: req.params.username},
        returning: true
      }
    )
    res.send(updatedUser)
  } catch (error) {
    throw error
  }
}

const DeleteUser = async (req, res) => {
  try {
    const deletedUser = await User.destroy({
      where: {id: req.params.username},
      trunicate: true
    })
    res.send(deletedUser)
  } catch (error) {
    throw error
  }
}

module.exports = {
  FindUser,
  GetLikedEvents,
  CreateUser,
  UpdateUser,
  DeleteUser,
}