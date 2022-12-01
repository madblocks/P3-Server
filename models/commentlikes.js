'use strict';
const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
  const CommentLikes = sequelize.define('CommentLikes', {
    commentId: {
      type: DataTypes.UUID,
      references: {
        model: 'Comment',
        id: 'id'
      },
      allowNull: false
    },
    userId: {
      type: DataTypes.UUID,
      references: {
        model: 'User',
        id: 'id'
      },
      allowNull: false
    }
  }, {
    tableName: 'commentLikes',
  })
};