'use strict';
const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
  const EventLikes = sequelize.define('EventLikes', {
   

    userId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'users',
        id: 'id'
      }
    },
    eventId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'events',
        id: 'id'
      }
    }
  }, {
    tableName: 'eventLikes',
    timestamps: true
  });
  EventLikes.associate = function(model){
    
    EventLikes.belongsTo(model.User, {foreignKey:'id', targetkey:'id', as:'likedEvent'})
    EventLikes.belongsTo(model.Event, {foreignKey:'id', targetkey:'id', as:'EventLiked'})

  }
  return EventLikes
};