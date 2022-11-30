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
    name: { 
      type: DataTypes.STRING,
      allowNull: false, 
    },
    ownerID:{
     type: DataTypes.INTEGER,
     references: {
      model: "User",
      id:"id"
     }
    },
    activity_type: {
      type:DataTypes.STRING,
      allowNull:false
    },
    cordinates:{
    type: DataTypes.STRING,
    allowNull: false
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false
    },
    state: {
      type: DataTypes.STRING,
      allowNull:false
    },
    descriptions: DataTypes.STRING,
    reccuring:{
       type:DataTypes.STRING,
      defaultValue: ""
    },
  }, {
    sequelize,
    modelName: 'Activity',
    tableName:"activities"
  });
  return Activity;
};