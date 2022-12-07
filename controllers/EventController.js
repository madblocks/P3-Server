const { User, Event, Comment, Activity } = require('../models');

const { Op, QueryTypes } = require('sequelize')

// url:  /api/event
// url: /api/event/?query=value or /api/event?query=value&query=value
// stole this code from this video link:https://www.youtube.com/watch?v=IPC-jZbafOk&ab_channel=LukmanHarun
// need to check out npm package 'express-validator' from video
const FindEvents = async (req, res) => {
  try {
    const where = {};
    const whereUser = {};
    //query params 
    const { name, date, city, state, recurring, activityId, ownerId, owner, limit } = req.query;
    if(name) where.name = { [Op.like]: `%${name}%` }
    if(date) where.date = { [Op.order]: `%${date}%` }
    if(city) where.city = { [Op.like]: `%${city}%` }
    if(state) where.state = { [Op.eq]: state }
    if(recurring) where.recurring = { [Op.eq]: recurring }
    if(activityId) where.activityId = { [Op.eq]: activityId }
    if(ownerId) whereUser.id = { [Op.eq]: ownerId}
    if(owner) whereUser.username = { [Op.eq]: owner}

    const results = await Event.findAll({
      limit: limit || 100,
      order: [["date", `asc`]],
      where: { ...where },
      attributes: ['id', 'name', 'date', 'city', 'state', 'longitude', 'latitude',
                    'recurring', 'description', 'activityId', 'img'],
      include: [
        { model: User, as: "owner", attributes: ["id","username"], where: {...whereUser}},
        { model: Activity, as: "activity", attributes: ["name","ref","icon"] },
      ]
    })
    res.send(results)
  } catch(error) {
    throw(error)
  }
}

// url: /api/event/:eventId
const GetEventById = async (req, res) => {
  try {
    //console.log(req.params)
    const result = await Event.findAll({
      where: {id: req.params.eventId},
      include: [{
        model: Activity,
        as: "activity",
        attributes: ['name']
      },{
        model: User,
        as: "owner",
        attributes: ['id','username']
      },{
        model: User,
        as: "attendees",
        attributes: ['id','username','firstName','lastName','fullName'],
        through: {attributes: []}
      }]
    })
    res.send(result)
  } catch (error) {
    throw error
  }
}

// url: /api/event/:eventId
const CreateEvent = async (req, res) => {
  try {
    const event = await Event.create(req.body)
    res.send(event)
  } catch (error) {
    throw error
  }
}

// url: /api/event/:eventId
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

// url: /api/event/:eventId
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
  GetEventById,
  CreateEvent,
  UpdateEvent,
  DeleteEvent
}