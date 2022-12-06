'use strict';
const { User, Comment, sequelize } = require('../models')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const commentLikes = await Promise.all(
      [...Array(100)].map(async () => {

        //pick a random user 
        let user = await User.findOne({ order: sequelize.random(), raw: true})
        console.log(user)
        //pick a random comment 
        let comment = await Comment.findOne({ order: sequelize.random(), raw: true })
        console.log(comment)
        return {
          commentId: comment.id,
          userId: user.id,
          createdAt: new Date(), 
          updatedAt: new Date()
        }
      })
    )
    return queryInterface.bulkInsert('commentLikes', commentLikes)
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('commentLikes', null, {})
  }
};
