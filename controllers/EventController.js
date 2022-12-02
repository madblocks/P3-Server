const { User, Event, Comment, Activity } = require('../models')

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

//url /api/event/:username
//not functioning returns []
//will return to later -JV 
const GetEventByUserId = async (req, res) => {
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

//url /api/event/:activityId
//not functioning returns []
//will return later - JV
const GetEventByActivityID = async (req, res) => {
try {
  const result = await Event.findAll({
    where: {activityId: req.params.activityId},
    attributes: [ 'name'

    ]
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
  GetEventByActivity,
  GetEventByActivityID,
  GetEventByUserId,
  GetEvent,
  CreateEvent,
  UpdateEvent,
  DeleteEvent
}