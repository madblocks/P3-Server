'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
   up : (queryInterface, Sequelize) => {
    return queryInterface.createTable('events', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.literal('gen_random_uuid()'),
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      userId: {
        type: Sequelize.UUID,
        onDelete: 'CASCADE',
        references: {
          model: 'users',
          id: 'id'
        }
      },
      activityId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onDelete: 'CASCADE',
        references: {
          model: 'activities',
          id: 'id'
        }
      },
      date: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
        allowNull: false
      },
      longitude: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      latitude: {
        type: Sequelize.FLOAT,
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
        type: Sequelize.TEXT
      },
      recurring: {
        type: Sequelize.STRING,
        defaultValue: ""
      },
      img: {
        type: Sequelize.ARRAY(Sequelize.STRING),
        defaultValue: []
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