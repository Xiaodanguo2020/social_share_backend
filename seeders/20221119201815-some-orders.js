"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("orders", [
      { status: "created", requestId: 1, listingId: 1 },
      { status: "created", requestId: 2, listingId: 2 },
      { status: "created", requestId: 3, listingId: 7 },
      { status: "created", requestId: 4, listingId: 6 },
      { status: "created", requestId: 6, listingId: 11 },
      { status: "created", requestId: 7, listingId: 5 },
      { status: "created", requestId: 8, listingId: 10 },
      { status: "created", requestId: 9, listingId: 2 },
      { status: "created", requestId: 10, listingId: 10 },
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
    await queryInterface.bulkDelete("orders", null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
