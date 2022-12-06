'use strict';

const falso = require('@ngneat/falso')
const fs = require('fs')

const avatar_Assets_Path = __dirname + '/../assets/public/avatars'
const imgsApiUrl = 'img/'
let avatars = {}
fs.readdirSync(avatar_Assets_Path).filter(dirItem => !dirItem.includes('.')).map(folder => {
  avatars[folder] = fs.readdirSync(avatar_Assets_Path + '/' + folder).filter(dirItem => dirItem.slice(-4) === '.svg')
})

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const users = await Promise.all(
      [...Array(20)].map(async () => {
        let user = falso.randUser()
        let folder = Object.keys(avatars)[Math.floor(Math.random() * Object.keys(avatars).length)]
        let avatar = avatars[folder][Math.floor(Math.random() * avatars[folder].length)]
        let avatarUrl = 'avatar/' + folder + '/' + avatar
        
        return {
          username: user.username,
          firstName: user.firstName,
          lastName: user.lastName,
          avatar: avatarUrl,
          bio: "I Couldn't live without Outdoorsy!",
          passwordDigest: 'placeholder',
          email: user.email,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      })
    )

    const usersPlus = [...users, 
      {
        username: 'xXMadBoyXx',
        firstName: 'Andrew',
        lastName: 'Kennedy',
        avatar: 'avatar/animals/beaver-svgrepo-com.svg',
        bio: 'placeholder',
        passwordDigest: '$2b$12$jTecc2z..dbFATDwKS64QOAoNyvsxOVSbwxh609PqUz4mnytjVflu',
        email: 'akennedy@fake.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'xXRunnerXx',
        firstName: 'Jeremy',
        lastName: 'Villalva',
        avatar: 'avatar/animals/buffalo-svgrepo-com.svg',
        bio: 'placeholder',
        passwordDigest: '$2b$12$cJHE4gkPSzx.pUFSyO.sC.PHc4ENsmCU3tuB.aKWhsNGw1OSdP876',
        email: 'jvillava@fake.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'xXUltimateBoyXx',
        firstName: 'Tim',
        lastName: 'Villanueva',
        avatar: 'avatar/animals/bear-svgrepo-com.svg',
        bio: 'placeholder',
        passwordDigest: '$2b$12$I1oY7DCWruxs7ziLVW3QgOChGzFZfhrxL59Mh6LwwKvReENNJ347e',
        email: 'tvillanueva@fake.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'xXLeetCSSXx',
        firstName: 'Umida',
        lastName: 'Mystery',
        avatar: 'avatar/animals/bee-svgrepo-com.svg',
        bio: 'placeholder',
        passwordDigest: '$2b$12$MXmdEZ4BlfgkOHdDLr/R.uSUmhQUaghpZG3qb9WdG1XS2XbU6I.ZG',
        email: 'umida@fake.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'xXKingJeremyXx',
        firstName: 'Jeremy',
        lastName: 'Taubman',
        avatar: 'avatar/animals/catterpillar-40513-svgrepo-com.svg',
        bio: 'placeholder',
        passwordDigest: '$2b$12$AYYTno/zJDFeSz4WH/K6D.IUdsNwYNkfF9I2eh8Y8Q4.UJf5vrchO',
        email: 'kingJT@fake.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]
    queryInterface.bulkInsert('users', usersPlus)
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {})
  }
};


