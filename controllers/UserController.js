const { User, Event, Comment, Avatar} = require('../models')

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
        model: Event,
        as: 'attendingEvents',
        attributes: ['id','name','date','description','img'],
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
    await User.destroy({
      where: {id: req.params.username},
      trunicate: true
    })
    res.send(`Deleted User: ${req.params.username}`)
  } catch (error) {
    throw error
  }
}

const GetAvatars = async (req, res) => {
  try {
    const avatars = await Avatar.findAll()
    res.send(avatars)
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
  GetAvatars,
}