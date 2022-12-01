'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const CommentLikes = sequelize.define('CommentLikes', {
    commentID: DataTypes.UUID,
    likeID: DataTypes.UUID
  }, {
    tableName: 'commentLikes',
  }
  )};