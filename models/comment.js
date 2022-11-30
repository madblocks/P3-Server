'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Comment.init({
    userID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "User",
        id: "id"
      }
    },
    activityID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Activity",
        id: "id"
      }
    },
    body: {
      type: DataTypes.STRING,
      allowNull: false
    },
    likes: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    }
  }, {
    sequelize,
    modelName: 'Comment',
  });
  return Comment;
};