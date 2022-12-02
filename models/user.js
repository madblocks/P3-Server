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
    profileImg: DataTypes.STRING,
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
    })

    User.hasMany(models.Event, {
      foreignKey: "userId",
    })

    User.belongsToMany(models.Event, {
      through: "Attending",
      foreignKey: "eventId",
      as: "attendedEvents"
    })
    
    User.belongsToMany(models.Comment, {
      through: "CommentLikes",
      foreignKey: "userId",
      as: "likedComment"
    })
    
    User.belongsToMany(models.Event, {
      through: "EventLikes",
      foreignKey: "eventId",
      as: "likedEvent"
    })
  
    //stole this code from the video idk if it works as it should 
    // holding off on this until we get it basic posts working.  We'll need to create the follow table since we aren't 
    // using sync() and maybe add the followedId
    // User.belongsToMany(models.User, {as: "User", foreignKey: "Userid", through: "follow"})

    // User.belongsToMany(models.User, {as: "Followed", foreignKey: "Followedid", through: "follow"})
  }
  return User
};