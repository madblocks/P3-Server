'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const CommentLikes = sequelize.define('CommentLikes', {
    commentId: {
      type: DataTypes.UUID,
      references: {
        model: 'comments',
        id: 'id'
      }
    },
    userId: {
      type: DataTypes.UUID,
      references: {
        model: 'users',
        id: 'id'
      }
    }
  }, {
    tableName: 'commentLikes',
  });
  // CommentLikes.associate = function(model) {

  //   CommentLikes.belongsTo(model.Comment, {foreignKey: 'id', targetKey: 'id', as:'likedComment'})
  //   CommentLikes.belongsTo(model.User, {foreignKey: 'id', targetKey: 'id', as:'commentLiked'})

  // }
  return CommentLikes
};
