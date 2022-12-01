'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
const EventTypes = sequelize.define('EventType', {
    name: DataTypes.STRING,
    id: DataTypes.UUID,
    icon:DataTypes.STRING
  }, {
    tableName:'eventTypes'
  }
  )};