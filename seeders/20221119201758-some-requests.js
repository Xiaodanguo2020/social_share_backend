"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("requests", [
      {
        title: "Eletric heater",
        description:
          "It's getting really cold, renting a elerict heater for my garage",
        image: "",
        active: true,
        start_date: new Date("2022-11-25"),
        end_date: new Date("2022-11-27"),
        userId: 1,
        categoryId: 3,
      },
      {
        title: "jigsaw puzzel",
        description:
          "for winter holidays, looking for a jigsaw puzzel for my kids, any diffioculty level is oki",
        image: "",
        active: true,
        start_date: new Date("2023-01-02"),
        end_date: new Date("2023-01-07"),
        userId: 5,
        categoryId: 5,
      },
      {
        title: "steam cleaner",
        description: "looking for a steam cleaner to clean the carpet and sofa",
        image: "",
        active: true,
        start_date: new Date("2022-12-16"),
        end_date: new Date("2022-12-18"),
        userId: 2,
        categoryId: 3,
      },
      {
        title: "cargo bike",
        description:
          "I am moving before chrismas, looking for a cargo bike to move things around",
        image: "",
        active: true,
        start_date: new Date("2022-12-21"),
        end_date: new Date("2022-12-23"),
        userId: 1,
        categoryId: 4,
      },
      {
        title: "hammer drill",
        description:
          "I have concrete ceiling, i need hammer drill to install some lighting for my living room ",
        image: "",
        active: true,
        start_date: new Date("2022-12-15"),
        end_date: new Date("2022-12-20"),
        categoryId: 2,
      },
      {
        title: "ladder",
        description: "looking for 35m reach ladder to cleanup my roof",
        image: "",
        active: true,
        start_date: new Date("2023-01-15"),
        end_date: new Date("2023-01-20"),
        userId: 6,
        categoryId: 2,
      },
      {
        title: "thermal viewer",
        description:
          "going to camping in Latin America, looking for portable thermal viewers",
        image: "",
        active: true,
        start_date: new Date("2023-01-15"),
        end_date: new Date("2023-01-20"),
        userId: 6,
        categoryId: 8,
      },
      {
        title: "projector screen",
        description:
          "looking for projector screen for the up-coming gathering we have at our house",
        image: "",
        active: true,
        start_date: new Date("2023-01-11"),
        end_date: new Date("2023-01-15"),
        userId: 7,
        categoryId: 7,
      },
      {
        title: "jigsaw puzzel",
        description: "looking for jigsaw puzzel, 500 pieces or above is good",
        image: "",
        active: true,
        start_date: new Date("2023-12-16"),
        end_date: new Date("2023-12-17"),
        userId: 1,
        categoryId: 5,
      },
      {
        title: "home cinema projector screen",
        description:
          "looking for home cinema projector screen to try out before we buy",
        image: "",
        active: true,
        start_date: new Date("2023-12-16"),
        end_date: new Date("2023-12-17"),
        userId: 5,
        categoryId: 7,
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
    await queryInterface.bulkDelete("requests", null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
