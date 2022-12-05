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
      type: DataTypes.DATE
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
    // img: {
    //   type: DataTypes.ARRAY(DataTypes.STRING)
    // }
  }, {
    tableName: "events" 
  });
  Event.associate = function(model) {

    Event.hasMany(model.Comment, {
      foreignKey: "commentId",
      as: 'comments'
    })

    Event.belongsTo(model.Activity, {
      as: 'activity'
    })

    Event.belongsTo(model.User, {
      as: 'user'
    })

    Event.belongsToMany(model.User, {
      through: "Attending",
      foreignKey: "userId",
      as: "attendees"
    })

    Event.belongsToMany(model.User, {
      through: "EventLikes",
      foreignKey: "userId",
      as: "eventLiked"
    })
  }
  return Event
}