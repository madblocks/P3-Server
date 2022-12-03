const { User, Event, Comment, Activity, sequelize, } = require('../models');
const { QueryTypes } = require('sequelize')

// url: /api/event
//works tested
const FindEventsByDateAsc = async (req, res) => {
  try {
    const result = await Event.findAll({
      order: [['date', 'ASC']],
      attributes: [ 'name',
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
        as: "user",
        attributes: ["username"]
      }]
  })
    res.send(result)
  } catch (error) {
    throw error
  }
}

//find event by query string 
//url /api/event/<req.query>
const QueryStringSearch = async (req, res) => {
  try {
    const results = await sequelize.query(
      'SELECT * FROM events WHERE name LIKE :name',
      {
        replacements: {name: '%ki%'},
        type: QueryTypes.SELECT
      }
    ) 
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
  FindEventsByDateAsc,
  QueryStringSearch,
  GetEventByActivity,
  GetEvent,
  CreateEvent,
  UpdateEvent,
  DeleteEvent
}