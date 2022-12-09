const { EventLikes } = require('../models')

const GetEventLikes = async (req, res) => {
    try {   
        const result = await EventLikes.findAll({})
        res.send(result)
    } catch (error) {
        throw error 
    }
}

const GetAmountOfLikes = async (req, res) => {
    try {
        const result = await EventLikes.findAndCountAll()
        res.send(result)
    } catch (error) {
        throw error 
    }
}

const CreateEventLikes = async (req, res) => {
    try {
        const createEventLikes = await EventLikes.create(req.body)
        res.send(createEventLikes)
    } catch (error) {
        throw error 
    }
}


const DeleteEventLikes = async (req, res) => {
    try {
        await EventLikes.destroy({
            where: {id: req.params.id},
            trunicate: true
        })
        res.send(`Deleted Event Likes with ID: ${req.params.id}`)
    } catch (error) {
        throw error 
    }
}



module.exports = {
    GetEventLikes, 
    GetAmountOfLikes,
    CreateEventLikes, 
    DeleteEventLikes
}