'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.sequelize.query('CREATE EXTENSION "uuid-ossp";')
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.sequelize.query('DROP EXTENSION "uuid-ossp";')
  }
};
