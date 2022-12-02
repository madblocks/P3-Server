'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
   up : (queryInterface, Sequelize) => {
    return queryInterface.createTable('events', {
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
        type: Sequelize.UUID,
        references: {
          model: {
            tableName: 'users',
          },
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
   down : (queryInterface, Sequelize) => {
    return queryInterface.dropTable('events');
  }
};