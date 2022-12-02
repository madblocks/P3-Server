'use strict';
const { DataTypes, Sequelize } = require('sequelize');
const User = sequelize.define('User', {id: DataTypes.UUID})

//seqeulize define also returns model hence no return statement 
module.exports = (sequelize) => {
  const Event = sequelize.define('Event', {
    id: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.UUID,
          defaultValue: Sequelize.UUIDV4
        },
    name: { 
        type: DataTypes.STRING,
        allowNull: false, 
      },
      ownerId:{
        type: Sequelize.UUID,
        primaryKey: true,
        references: {
          model: 'User',
          id: "id"
        }
      },
      eventTypeId: {
        type: DataTypes.STRING,
        allowNull: false,
        references:{
          model:EventType,
          key:'id'        
      }
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
      tableName: "events",
    });
// write the associations here i guess 

      Event.hasMany(Comment, {
        foreignKey:"commentId",
      })

      Event.hasOne(EventType, {
        foreignKey:"name",
      })

      Event.belongsTo(User, {
        foreignKey:"ownerId",
      })

      Event.belongsToMany(User, {
        through:"Attending",
        foreignKey:"userId",
        as:"Attendees"
      })

      Event.belongsToMany(User, {
        through:"EventLikes",
        foreignKey:"userId",
        as:"eventLiked"
      })
}