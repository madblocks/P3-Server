'use strict';
const { DataTypes } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  const Attending = sequelize.define('Attending', {
    userId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'User',
        id: 'id'
      }
    },
    eventId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'Event',
        id: 'id'
      }
    }
  }, {
    tableName: 'attending',
    timestamps: true
  });
};