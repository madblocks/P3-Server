const { User, Event, Comment, Activity } = require('../models')

// url: /api/event/
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

//url /api/event/:name
const GetEventByActivity = async (req, res) => {
  try {
    const result = await Event.findAll({
      order: [["date", "ASC"]],
      where : {name: req.params.name },
      attributes:[ 'name',
                   'date',
                   'city',
                   'state',
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

//url /api/event/:username

const GetEventByUser = async (req, res) => {
  try{
    const result = await Event.findAll({
      order : [["date", 'ASC']],
      where : {userId : req.params.userId},
      attributes : [ 'name'

      ]
    })
    res.send(result)
  } catch (error) {
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
  GetEventByActivity,
  GetEventByUser,
  GetEvent,
  CreateEvent,
  UpdateEvent,
  DeleteEvent
}