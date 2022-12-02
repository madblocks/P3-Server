'use strict';
const { DataTypes } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  const Attending = sequelize.define('Attending', {
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
    tableName: 'attending',
    timestamps: true
  });
  return Attending
};