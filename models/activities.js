'use strict';
const { DataTypes, Sequelize } = require('sequelize');

//seqeulize define also returns model hence no return statement 
module.exports = (sequelize) => {
const Activity = sequelize.define('Activity', {
    name: { 
      type: DataTypes.STRING,
      allowNull: false, 
    },
    ownerID:{
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
      references: {
        model: "User",
        id: "id"
      }
    },
    activity_type: {
      type: DataTypes.STRING,
      allowNull: false
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
      allowNull: false
    },
    description: DataTypes.STRING,
    recurring: {
      type: DataTypes.STRING,
      defaultValue: ""
    },
  }, {
    tableName:"activities" 
  });
// write the associations here i guess 

}