'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    Attending: DataTypes.ARRAY,
    profile_Img: DataTypes.STRING,
    bio: DataTypes.STRING,
    password: DataTypes.STRING,
    favorites: DataTypes.ARRAY,
    email: DataTypes.STRING,
    phoneNumber: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'users'
  });
  return User;
};