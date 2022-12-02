'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('activities',
      [
        {
          name: 'Hikes',
          icon: 'placeholder',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Running',
          icon: 'placeholder',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Ultimate Frisbee',
          icon: 'placeholder',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Skiing',
          icon: 'placeholder',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Mountain Biking',
          icon: 'placeholder',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Road Biking',
          icon: 'placeholder',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Kayaking',
          icon: 'placeholder',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Whitewater Rafting',
          icon: 'placeholder',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Fishing',
          icon: 'placeholder',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Bird Watching',
          icon: 'placeholder',
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
