'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('comments', 
      [
        
      ]
    )
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('comments', null, {})
  }
};
