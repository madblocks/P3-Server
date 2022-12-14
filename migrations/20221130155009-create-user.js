'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
   up : (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', {
      id: {
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.literal('gen_random_uuid()'),
        allowNull: false,
      },
      username: {
        type: Sequelize.STRING,
        unique: true,
        allowNull:false
      },
      firstName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      lastName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      avatar: {
        type: Sequelize.STRING,
        defaultValue: ""
      },
      bio: {
        type: Sequelize.STRING,
        defaultValue: ""
      },
      passwordDigest: {
        type: Sequelize.STRING,
        allowNull: false
      },
      favorites: {
        type: Sequelize.ARRAY(Sequelize.INTEGER),
        defaultValue: []
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true
        }
      },
      phoneNumber: {
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
    return queryInterface.dropTable('users');
  }
};