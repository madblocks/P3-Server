'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Activity extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Activity.init({
    name: DataTypes.STRING,
    ownerID:DataTypes.INTEGER,
    activity_type: DataTypes.STRING,
    cordinates: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    descriptions: DataTypes.STRING,
    reccuring: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Activity',
    tableName:"activities"
  });
  return Activity;
};