'use strict';
const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
  const EventLikes = sequelize.define('EventLikes', {
   
    userId: {
      type: DataTypes.UUID,
      allowNull: false
    },
    eventId: {
      type: DataTypes.UUID,
      allowNull: false
    }
  }, {
    tableName: 'event_likes',
    timestamps: true
  });
};