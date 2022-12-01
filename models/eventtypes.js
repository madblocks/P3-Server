'use strict';
const {DataTypes} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
const EventTypes = sequelize.define('EventType', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    icon: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName:'eventTypes'
  })
  EventType.belongsTo(Event, {
    foreignKey:"Eventid",
  })

};