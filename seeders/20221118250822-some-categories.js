"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("categories", [
      { category: "Image & Sound" },
      { category: "DIY tools" },
      { category: "Housekeeping" },
      { category: "Transport" },
      { category: "Gaming & Toys" },
      { category: "Cooking" },
      { category: "Event & Party" },
      { category: "Sports" },
      { category: "Digital accesories" },
    ]);
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("categories", null, {});

    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
