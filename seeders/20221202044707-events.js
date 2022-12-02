'use strict';
const { User, Activity, sequelize } = require('../models')
const falso = require('@ngneat/falso')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const events = await Promise.all(
      [...Array(50)].map(async () => {
        let user = await User.findOne({ order: sequelize.random(), raw: true })
        let activity = await Activity.findOne({ order: sequelize.random(), raw: true})

        return {
          name: activity.name,
          userId: user.id,
          activityId: activity.id,
          date: falso.randFutureDate({years: .125}),
          longitude: falso.randFloat({ min: -83.424048, max: -82.000369, fraction: 6 }), 
          latitude: falso.randFloat({ min: 35.290469, max: 35.978006, fraction: 6 }), 
          city: 'Ashville',
          state: 'NC',
          description: falso.randParagraph(),
          recurring: 'what should we do here?',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      })

    )
    return queryInterface.bulkInsert('events', events)
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('events', null, {})
  }
};
