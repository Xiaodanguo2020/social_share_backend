"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("listings", [
      {
        title: "Eletric heater",
        description: "Rent electric heater, hot air cannon",
        image:
          "https://images.peerby.com/unsafe/800x/smart/https://ucarecdn.com/888b4c81-04bc-4f13-ac2e-5b50a5a6a532~1/nth/0/-/format/jpeg/-/quality/lightest/",
        available: true,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Jigsaw puzzle borrow 1000 pieces heater",
        description:
          "Jigsaw puzzle's Life from a supermarket, 1000 pieces, complete. If I have nothing to do, I can also drop by and pick up for free; just send a message",
        image:
          "https://images.peerby.com/unsafe/800x/smart/https://ucarecdn.com/8620fa79-3c8e-4f75-97a3-f21065aa0fa0~1/nth/0/-/format/jpeg/-/quality/lightest/",
        available: true,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "cordless jigsaw 20V Parkside",
        description:
          "I will give you 3 full batteries and a charger.The jigsaw has a fast progression and can cut curves smoothly due to the pendulum stroke, which can be set in 3 positions. ",
        image:
          "https://images.peerby.com/unsafe/800x/smart/https://ucarecdn.com/efcebe5c-242c-4fcd-8db9-187cc1273381~1/nth/0/-/format/jpeg/-/quality/lightest/",
        available: true,
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Risk game, borrow nostalgic version",
        description:
          "Nostalgic version with real wooden armies, the classic map of the 1959 version, a historical overview of the game RISK and a booklet with the original rules.",
        image:
          "https://images.peerby.com/unsafe/800x/smart/https://ucarecdn.com/a6475d8e-064f-46ae-89a9-e48a905647ad~1/nth/0/-/format/jpeg/-/quality/lightest/",
        available: true,
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
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
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
