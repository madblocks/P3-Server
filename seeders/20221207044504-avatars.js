'use strict';
const fs = require('fs')
const { Avatar } = require('../models')

const avatar_Assets_Path = __dirname + '/../assets/public/avatars'
const imgsApiUrl = 'img/'
let avatars = []
fs.readdirSync(avatar_Assets_Path).filter(dirItem => !dirItem.includes('.')).map(folder => {
  fs.readdirSync(avatar_Assets_Path + '/' + folder).filter(dirItem => dirItem.slice(-4) === '.svg')
    .forEach(avatar => avatars.push({ url: `avatar/${folder}/${avatar}`,
                                      createdAt: new Date(),
                                      updatedAt: new Date()}))
})

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('avatars', avatars);
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('avatars', null, {});
  }
};
