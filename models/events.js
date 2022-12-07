'use strict';
const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Event = sequelize.define('Event', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    name: { 
      type: DataTypes.STRING,
      allowNull: false, 
    },
    userId:{
      type: DataTypes.UUID,
      primaryKey: true,
      references: {
        model: 'users',
        id: "id"
      }
    },
    activityId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'activities',
        key:'id'        
      }
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    longitude: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    latitude: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: DataTypes.TEXT,
    recurring: {
      type: DataTypes.STRING,
      defaultValue: ""
    },
    img: {
      type: DataTypes.ARRAY(DataTypes.STRING)
    }
  }, {
    tableName: "events" 
  });
  Event.associate = function(models) {

    Event.hasMany(models.Comment, {
      foreignKey: "eventId",
      as: 'comments'
    })

    Event.belongsTo(models.Activity, {
      as: 'activity'
    })

    Event.belongsTo(models.User, {
      as: 'owner',
      foreignKey: 'userId'
    })

    Event.belongsToMany(models.User, {
      through: models.Attending,
      foreignKey: "eventId",
      as: "attendees"
    })

    Event.belongsToMany(models.User, {
      through: models.EventLikes,
      foreignKey: "eventId",
      as: "eventLikedBy"
    })
  }
  return Event
}