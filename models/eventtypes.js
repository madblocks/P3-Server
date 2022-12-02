'use strict';
const {DataTypes} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const EventType = sequelize.define('EventType', {
    id: {
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    icon: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName:'eventTypes'
  })
  EventType.associate = function(models) {
    EventType.hasOne(models.Event, {
      foreignKey:"eventTypeId",
    })
  }
};