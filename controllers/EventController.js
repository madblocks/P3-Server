const { User, Event, Comment } = require('../models')

// needs query string implemented
const FindEvents = async (req, res) => {
  try {
    const result = await Event.findAll()
    res.send(result)
  } catch (error) {
    throw error
  }
}

const GetEvent = async (req, res) => {
  try {
    const result = await Event.findAll({
      where : {id: req.params.eventId}
    })
    res.send(result)
  } catch (error) {
    throw error
  }
}

const CreateEvent = async (req, res) => {
  try {
    const event = await Event.create(req.body)
    res.send(event)
  } catch (error) {
    throw error
  }
}

const UpdateEvent = async (req, res) => {
  try {
    const updatedEvent = await Event.update(
      req.body,
      {
        where: { eventId: req.params.eventId},
        returning: true
      }
    )
    res.send(updatedEvent)
  } catch (error) {
    throw error
  }
}

const DeleteEvent = async (req, res) => {
  try {
    const deletedEvent = await Event.destroy({
      where: {id: req.params.eventId},
      trunicate: true
    })
    res.send(deletedEvent)
  } catch (error) {
    throw error
  }
}

module.exports = {
  FindEvents,
  GetEvent,
  CreateEvent,
  UpdateEvent,
  DeleteEvent
}