'use strict';
const { useAsyncError } = require('react-router-dom');
const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
  const User = sequelize.define('User', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false
    },
    username: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    fullName: {
      type: DataTypes.VIRTUAL,
      get() {
        return `${this.firstName} ${this.lastName}`
      }
    },
    profileImg: DataTypes.STRING,
    bio: DataTypes.STRING,
    passwordDigest: {
      type: DataTypes.STRING,
      allowNull: false
    },
    favorites:DataTypes.ARRAY(DataTypes.STRING),
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    phoneNumber: DataTypes.STRING,
  }, {
    tableName: 'users',
    timestamps: true
  });
    User.hasMany(Comment, {
    foreignKey:"userId",
    })

    User.hasMany(Event, {
      foreignKey:"ownerId",
    })

    User.belongsToMany(Event, {
      through:"Attending",
      foreignKey:"eventId",
      as:"attendedEvents"
    })
    
    User.belongsToMany(Comment, {
      through:"CommentLikes",
      foreignKey:"userId",
      as:"likedComment"
    })
    
    User.belongsToMany(Event, {
      through:"EventLikes",
      foreignKey:"eventId",
      as:"likedEvent"
    })

    //stole this code from the video idk if it works as it should 
    User.belongsToMany(User, {as:"User", foreignKey:"Userid", through:"follow"})

    User.belongsToMany(User, {as:"Followed", foreignKey:"Followedid", through:"follow"})
};