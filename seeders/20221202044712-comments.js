'use strict';
const { User, Event, sequelize } = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const comments = await Promise.all(
      [...Array(350)].map(async () => {
      
        //PICK A RANDOM USER 
        let user = await User.findOne({ order: sequelize.random(), raw: true})
        //Pick a random event 
        let event = await Event.findOne({ order: sequelize.random(), raw: true})
        //pick a random phrase 
        let phrases = ['Wow', 'so much fun', 
        'definitly not sponsered to comment on this event', '7/10 too much water', 'saw too many birds for my liking', 'too cold', 'organisers need to do a better job','i like wearing shorts they easy and comfy to wear']
        
        return {
          userId: user.id, 
          eventId: event.id,
          body:  phrases[Math.floor(Math.random() * phrases.length)], 
          createdAt: new Date(),
          updatedAt: new Date()
        }
      })
    )
      return queryInterface.bulkInsert('comments', comments)
    },
  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('comments', null, {})
  }
};
