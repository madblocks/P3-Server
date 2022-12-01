'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('comments', {
      id: {
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false
      },
      userId: {
      type: Sequelize.UUID,
      allowNull: false,
      references: {
        model: "User",
        id: "id"
      }
    },
      eventId: {
      type: Sequelize.UUID,
      allowNull: false,
      references: {
        model: "Activity",
        id: "id"
      }
    },
      body: {
        type: Sequelize.STRING,
        allowNull: false
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
    await queryInterface.dropTable('comments');
  }
};