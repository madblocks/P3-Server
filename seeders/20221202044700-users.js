'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users',
      [
        {
          username: 'xXMadBoyXx',
          firstName: 'Andrew',
          lastName: 'Kennedy',
          profileImg: 'placeholder',
          bio: 'placeholder',
          passwordDigest: 'placeholder',
          email: 'akennedy@fake.com',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          username: 'xXRunnerXx',
          firstName: 'Jeremy',
          lastName: 'Villalva',
          profileImg: 'placeholder',
          bio: 'placeholder',
          passwordDigest: 'placeholder',
          email: 'jvillava@fake.com',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          username: 'xXSoccerBoyXx',
          firstName: 'Tim',
          lastName: 'Villanueva',
          profileImg: 'placeholder',
          bio: 'placeholder',
          passwordDigest: 'placeholder',
          email: 'tvillanueva@fake.com',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          username: 'xXLeetCSSXx',
          firstName: 'Umida',
          lastName: 'Mystery',
          profileImg: 'placeholder',
          bio: 'placeholder',
          passwordDigest: 'placeholder',
          email: 'umida@fake.com',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          username: 'xXKingJeremyXx',
          firstName: 'Jeremy',
          lastName: 'Taubman',
          profileImg: 'placeholder',
          bio: 'placeholder',
          passwordDigest: 'placeholder',
          email: 'kingJT@fake.com',
          createdAt: new Date(),
          updatedAt: new Date()
        },
      ]
    )
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {})
  }
};
