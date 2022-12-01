'use strict';
const { DataTypes } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  const Attending = sequelize.define('Attending', {
    userId: {
      type: DataTypes.UUID,
      allowNull: false
    },
    eventId: {
      type: DataTypes.UUID,
      allowNull: false
    }
  }, {
    tableName: 'attending',
    timestamps: true
  });
};