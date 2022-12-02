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
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {
    tableName: 'comments',
    timestamps: true
  });
  Comment.associate = function(models) {
    Comment.belongsTo(models.User)

    Comment.belongsTo(models.Event)

    Comment.belongsToMany(models.User, {
      through: "CommentLikes",
      foreignKey: "userId",
      as: "commentsLiked"
    })
  }
  return Comment
};