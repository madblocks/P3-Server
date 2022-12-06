'use strict';

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
    avatar: DataTypes.STRING,
    bio: DataTypes.STRING,
    passwordDigest: {
      type: DataTypes.STRING,
      allowNull: false
    },
    favorites: DataTypes.ARRAY(DataTypes.INTEGER),
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
  User.associate = function(models) {
    //associations can be defined here
    User.hasMany(models.Comment, {
      foreignKey: "userId",
      as: 'comments'
    })

    User.hasMany(models.Event, {
      foreignKey: "userId",
      as: 'events'
    })

    User.belongsToMany(models.Event, {
      through: "attending",
      foreignKey: "eventId",
      as: "attendedEvents"
    })
    
    User.belongsToMany(models.Comment, {
      through: "commentLikes",
      foreignKey: "userId",
      as: "likedComment"
    })
    
    User.belongsToMany(models.Event, {
      through: models.EventLikes,
      foreignKey: "userId",
      as: "likedEvents"
    })
  
  }
  return User
};