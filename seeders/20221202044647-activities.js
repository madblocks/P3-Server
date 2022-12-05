'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('activities',
      [
        {
          name: 'Hiking',
          ref: 'hiking',
          icon: 'logo/hiking/hiking.svg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Running',
          ref: 'running',
          icon: 'logo/running/running.svg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Ultimate Frisbee',
          ref: 'ultimate',
          icon: 'logo/utimate/ultimate1.svg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Skiing',
          ref: 'skiing',
          icon: 'logo/skiing/skiing1.svg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Mountain Biking',
          ref: 'mountainBiking',
          icon: 'logo/mountain-biking/mountain-biking.svg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Road Biking',
          ref: 'roadBiking',
          icon: 'logo/road-biking/biking.svg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Kayaking',
          ref: 'kayaking',
          icon: 'logo/kayaking/kayak1.svg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Whitewater Rafting',
          ref: 'rafting',
          icon: 'logo/rafting/rafting.svg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Fishing',
          ref: 'fishing',
          icon: '/logo/fishing/fishing.svg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Bird Watching',
          ref: 'birdWatching',
          icon: '/logo/bird-watching/bird3.svg',
          createdAt: new Date(),
          updatedAt: new Date()
        }

      ]
    )
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('activities', null, {})
  }
};
