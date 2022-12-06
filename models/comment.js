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
        model: "users",
        id: "id"
      }
    },
    eventId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: "events",
        id: "id"
      }
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: false
    },
  }, {
    tableName: 'comments',
    timestamps: true
  });
  Comment.associate = function(models) {
    Comment.belongsTo(models.User, {
      as: 'user'
    })

    Comment.belongsTo(models.Event, {
      as: 'event'
    })

    Comment.belongsToMany(models.User, {
      through: models.CommentLikes,
      foreignKey: "commentId",
      as: "commentsLiked"
    })
  }
  return Comment
};