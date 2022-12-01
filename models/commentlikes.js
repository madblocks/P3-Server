'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
const CommentLikes = sequelize.define('CommentLikes', {
      commentId: DataTypes.UUID,
      userId: DataTypes.UUID
  }, {
    tableName: 'commentLikes',
  }
)};
