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
        categoryId: 3,
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
        categoryId: 5,
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
        categoryId: 2,
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
        categoryId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Thermal imaging handheld viewer. Rent Lahoux spotter pro 35",
        description:
          "Lahoux Spotter The Lahoux Spotter series are handheld thermal imaging viewers. The thermal imager helps you to see what you can't see in difficult viewing situations, for example forest and foliage or in the dark. ",
        image:
          "https://images.peerby.com/unsafe/800x/smart/https://peerby.s3.amazonaws.com/uploads/listings/0f25d35a-b506-4a9a-b624-ff81f3ec2d5f.jpg",
        available: true,
        userId: 3,
        categoryId: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Cargoroo electric cargo bike",
        description:
          "With pedal support, a range of 100 kilometers and a large cargo box ",
        image:
          "https://images.peerby.com/unsafe/800x/smart/https://peerby.s3.amazonaws.com/uploads/listings/a9c99722-5176-40a1-96e9-f8542161a2ee.jpg",
        available: true,
        userId: 4,
        categoryId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Kärcher steam cleaner KST2",
        description:
          "Deep cleaning of various surfaces Removes 99.99% of common household bacteria Adjust the steam volume per surface This Kärcher steam cleaner is your ideal cleaning aid in the home.",
        image:
          "https://images.peerby.com/unsafe/800x/smart/https://peerby.s3.amazonaws.com/uploads/listings/a2745f47-42b6-4a54-9ffb-9a0a24023e1d.jpg",
        available: true,
        userId: 4,
        categoryId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Nail tacker, (nail gun) Kibani SN9034. ",
        description:
          "On compressed air, suitable for nails and staples up to 90mm.",
        image:
          "https://images.peerby.com/unsafe/800x/smart/https://ucarecdn.com/f0ec5cb0-c876-4809-82c6-abd0adc554f8~1/nth/0/-/format/jpeg/-/quality/lightest",
        available: true,
        userId: 5,
        categoryId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Fiskars PowerGear X Lopper Bypass LX98 L",
        description:
          "The Fiskars PowerGear X Lopper Bypass LX98 L is perfect for pruning young, fresh greenery.",
        image:
          "https://images.peerby.com/unsafe/800x/smart/https://peerby.s3.amazonaws.com/uploads/listings/6110aa65-7fe4-4d91-90a7-86753e0a6bb3.jpg",
        available: true,
        userId: 5,
        categoryId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Projection screen led, self locking",
        description:
          "Extendable projection screen, stays where you pull it out and when you pull it again it rolls up again in a metal tube that is easy to hang.",
        image:
          "https://images.peerby.com/unsafe/800x/smart/https://ucarecdn.com/3f1d402e-c0ba-415e-93ef-025d8c611cb4~1/nth/0/-/format/jpeg/-/quality/lightest/",
        available: true,
        userId: 2,
        categoryId: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Rent a telescopic ladder",
        description:
          "Telescopic ladder 11 steps. Nice ladder and easy to carry.",
        image:
          "https://images.peerby.com/unsafe/800x/smart/https://peerby.s3.amazonaws.com/uploads/listings/339218c8-6afe-456a-9599-a85a5a577624.jpg",
        available: true,
        userId: 7,
        categoryId: 3,
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
    await queryInterface.bulkDelete("listings", null, {});

    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
