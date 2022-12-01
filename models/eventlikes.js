'use strict';
const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
  const EventLikes = sequelize.define('EventLikes', {
   
    userId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'User',
        id: 'id'
      }
    },
    eventId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'User',
        id: 'id'
      }
    }
  }, {
    tableName: 'eventLikes',
    timestamps: true
  });
};