'use strict';
const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
  const Comment = sequelize.define('Comment', {

    id: {
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false
    },
    userId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: "User",
        id: "id"
      }
    },
    eventId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: "Event",
        id: "id"
      }
    },
    body: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {
    tableName: 'comments',
    timestamps: true
  });
  Comment.belongsTo(User, {
    foreignKey:"userId",
  })

  Comment.belongsTo(Event, {
    foreignKey:"eventId",
  })

  Comment.belongsToMany(User, {
    through:"CommentLikes",
    foreignKey:"userId",
    as:'commentLikes'
  })
};