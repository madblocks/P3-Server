'use strict';
const { User, Event, sequelize } = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const comments = await Promise.all(
      [...Array(400)].map(async () => {
      
        //PICK A RANDOM USER 
        let user = await User.findOne({ order: sequelize.random(), raw: true})
        //Pick a random event 
        let event = await Event.findOne({ order: sequelize.random(), raw: true})
        //pick a random phrase 
        let phrases = [ 'Wow.', 
                        'So much fun.', 
                        'Definitly not sponsered to comment on this event.', 
                        '7/10 too much water.', 
                        'Saw too many birds for my liking.',
                        'Too cold.', 
                        'Organisers need to do a better job.',
                        'I like wearing shorts they easy and comfy to wear',
                        'Best spot ever',
                        'We had a blast.',
                        'Will definitely be back!',
                        'The kids loved it!',
                        'So many rocks...',
                        'Not enough shade.',
                        'We got lost on the way back.',
                        'Saw a black bear!',
                        'It was too much for us at our age.',
                        "It's best to go with friends."]
        
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
