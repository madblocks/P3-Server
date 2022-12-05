'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('activities',
      [
        {
          name: 'Hiking',
          icon: 'logo/hiking/hiking.svg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Running',
          icon: 'logo/running/running.svg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Ultimate Frisbee',
          icon: 'logo/utimate/ultimate1.svg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Skiing',
          icon: 'logo/skiing/skiing1.svg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Mountain Biking',
          icon: 'logo/mountain-biking/mountain-biking.svg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Road Biking',
          icon: 'logo/road-biking/biking.svg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Kayaking',
          icon: 'logo/kayaking/kayak1.svg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Whitewater Rafting',
          icon: 'logo/rafting/rafting.svg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Fishing',
          icon: '/logo/fishing/fishing.svg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Bird Watching',
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
