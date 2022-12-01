'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('events', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      ownerId: {
        type: Sequelize.INTEGER,
        references: {
          model: "User",
          id: "id"
        }
      },
      event_type: {
        type: Sequelize.STRING,
        allowNull: false
      },
      cordinates: {
        type: Sequelize.STRING,
        allowNull: false
      },
      city: {
        type: Sequelize.STRING,
        allowNull: false 
      },
      state: {
        type: Sequelize.STRING,
        allowNull: false 
      },
      description: {
        type: Sequelize.STRING
      },
      recurring: {
        type: Sequelize.STRING,
        defaultValue: ""
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('events');
  }
};