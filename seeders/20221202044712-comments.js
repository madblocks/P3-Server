'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('comments', 
      [

        {
          userId:"b8e3065f-5d6e-4c18-89a4-ee14c889a15c",
          eventId:"0f06f945-0c2f-48b9-add6-b4a068012c1f",
          body:" 5/10 too much water ",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId:"38db415f-cd22-4980-94b2-ca0e2232ad0e",
          eventId:"1404d876-c8dc-4eb3-bebc-5e29e3e22f14",
          body:" too cold ",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId:"38db415f-cd22-4980-94b2-ca0e2232ad0e",
          eventId:"2557d3bc-e31e-4ff4-908b-db67727de82d",
          body:" i love running in these shorts ",
          createdAt: new Date(),
          updatedAt: new Date()
        },

      ]
    )
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('comments', null, {})
  }
};
