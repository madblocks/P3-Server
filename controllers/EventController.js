const { User, Event, Comment, Activity, Sequelize, } = require('../models');
const { QueryTypes } = require('Sequelize')

// use query string here with base events url  /api/events
// stole this code from this video link:https://www.youtube.com/watch?v=IPC-jZbafOk&ab_channel=LukmanHarun
const FindEvents = async (req, res) => {
  try {
    const where = {};
    //query params 
    const { name, date, city, state, recurring } = req.query;
    if(name) where.name = {[Sequelize.Op.like]: `%${name}%` }
    if(date) where.date = {[Sequelize.Op.order]: `%${date}%` }
    if(city) where.city = {[Sequelize.Op.like]: `%${city}%` }
    if(state) where.state = {[Sequelize.Op.like]: `%${state}%` }
    if(recurring) where.recurring = {[Sequelize.Op.like]: `%${recurring}%` }

    const results = await Event.findAll({
      order: [["date", `asc`]],
      where: {
        ...where
      }
    })
    res.send(results)
  } catch(error) {
    throw(error)
  }
}

//url /api/event/:name
//works tested 
const GetEventByActivity = async (req, res) => {
  try {
    const result = await Event.findAll({
      order: [["date", "ASC"]],
      where : {name: req.params.name },
      attributes:[ 'name',
                   'date',
                   'city',
                   'state',
                   'longitude',
                   'latitude',
                   'recurring',
                   'description'
      ],
      include: [{
          model: User,
          as:'user',
          attributes:["username"]
      }]
    })
    res.send(result)
  } catch(error) {
    throw error 
  }
}


// url: /api/event/:eventId
const GetEvent = async (req, res) => {
  try {
    //console.log(req.params)
    const result = await Event.findAll({
      where: {id: req.params.eventId},
      include: [{
        model: Activity,
        as: 'activity',
        attributes: ['name']
      },{
        model: User,
        as: 'user',
        attributes: ['username']
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
  GetEventByActivity,
  GetEvent,
  CreateEvent,
  UpdateEvent,
  DeleteEvent
}