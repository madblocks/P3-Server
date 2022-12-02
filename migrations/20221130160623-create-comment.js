'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
   up : (queryInterface, Sequelize) => {
    return queryInterface.createTable('comments', {
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
        model:{
        tableName: 'users',
        },
        id: "id"
      }
    },
      eventId: {
      type: Sequelize.UUID,
      allowNull: false,
      references: {
        model: {
         tableName: "events",
        },
        id: "id"
      },
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
   down : (queryInterface, Sequelize) => {
    return queryInterface.dropTable('comments');
  }
};