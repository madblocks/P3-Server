const {User, Comment, Event, CommentLikes, Sequelize } = require('../models')

const GetCommentLikes = async (req, res) => {
    try {
        const result = await CommentLikes.findAll({
        
        })
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
    try{
        const DeleteCommentLikes = await CommentLikes.destroy({
            where: {id: req.params.commentLikesid },
             trunicate: true 
        })
        res.send(DeleteCommentLikes)
    } catch (error) {
        throw error
    }
}



module.exports = {
    GetCommentLikes,
    CreateCommentLikes, 
    DeleteCommentLikes
}