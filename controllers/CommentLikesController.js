const { CommentLikes } = require('../models')

const GetCommentLikes = async (req, res) => {
    try {
        const result = await CommentLikes.findAll({
        
        })
        res.send(result)
    } catch (error) {
        throw error 
    }
}

const GetAmmountOfLikes = async (req, res) => {
    try {
        const result = await CommentLikes.findAndCountAll()
        res.send(result)
    } catch (error) {
        throw error 
    }
}


const CreateCommentLikes = async (req, res) => {
    try{
        const createCommentLikes = await CommentLikes.create(req.body)
        res.send(createCommentLikes)
    }   catch (error) {
        throw error
    }
}

const DeleteCommentLikes = async(req, res) => {
    try {
        await CommentLikes.destroy({
            where: {id: req.params.id },
             trunicate: true 
        })
        res.send(`Deleted Comment Likes ID: ${req.params.id}`)
    } catch (error) {
        throw error
    }
}



module.exports = {
    GetCommentLikes,
    GetAmmountOfLikes,
    CreateCommentLikes, 
    DeleteCommentLikes
}