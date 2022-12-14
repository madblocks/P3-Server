'use strict';
const {DataTypes} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const Activity = sequelize.define('Activity', {
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
    ref: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    icon: {
      type: DataTypes.STRING,
      defaultValue: ''
    }
  }, {
    tableName:'activities'
  })
  Activity.associate = function(models) {
    Activity.hasOne(models.Event, {
      foreignKey:"activityId",
      as: 'event'
    })
  }
  return Activity
};