'use strict';
const { User, Event, sequelize } = require('../models')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const eventLikes = await Promise.all(
      [...Array(200)].map(async () => {

        //pick a random user 
        let user = await User.findOne({ order: sequelize.random(), raw: true})
        //pick a random comment 
        let event = await Event.findOne({ order: sequelize.random(), raw: true})

        return {
          userId: user.id,
          eventId: event.id,
          createdAt: new Date(), 
          updatedAt: new Date()
        }
      })
    )
    return queryInterface.bulkInsert('eventLikes', eventLikes)
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('eventLikes', null, {})
  }
};