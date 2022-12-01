'use strict';
const { DataTypes, Sequelize } = require('sequelize');

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
          model: "User",
          id: "id"
        }
      },
      event_type: {
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
      tableName: "events" 
    });
// write the associations here i guess 
      Event.hasMany(Comment, {
        foreignKey:"Commentid",
        as:"eventComment"
      })

      Event.hasOne(EventType, {
        foreignKey:"EventTypename",
        as:'eventName'
      })

      Event.belongsTo(User, {
        foreignKey:"Userid",
        as:"ownerId"
      })

      Event.belongsToMany(User, {
        through:"Attending",
        foreignKey:"Userid",
        as:"Attendee"
      })

      Event.belongsToMany(User, {
        through:"EventLikes",
        foreignKey:"Userid",
        as:"eventLike"
      })
}