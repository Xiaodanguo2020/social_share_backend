"use strict";
const bcrypt = require("bcrypt");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("users", [
      {
        name: "Xiaodan",
        email: "xiaodan@xiaodan.com",
        password: bcrypt.hashSync("xiaodan", 10),
        about:
          "I am striving to live a minimum life style as much as possible, up to share and I locate quite centra",
        zip_code: "1093VD",
        street_name: "commelinstraat",
        house_nr: 300,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Yuqi",
        email: "yuqi@yuqi.com",
        password: bcrypt.hashSync("yuqi", 10),
        about:
          "I am striving to live a minimum life style as much as possible, up to share and I locate quite centra",
        zip_code: "1017JB",
        street_name: "Kerkstraat",
        house_nr: 1674,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Aga",
        email: "aga@aga.com",
        password: bcrypt.hashSync("aga", 10),
        about:
          "I am striving to live a minimum life style as much as possible, up to share and I locate quite centra",
        zip_code: "1051VD",
        street_name: "Van Der Hoopstraat",
        house_nr: 174,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Karla",
        email: "karla@karla.com",
        password: bcrypt.hashSync("karla", 10),
        about:
          "I am striving to live a minimum life style as much as possible, up to share and I locate quite centra",
        zip_code: "1024KJ",
        street_name: "Corversbosstraat",
        house_nr: 637,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Maria",
        email: "maria@maria.com",
        password: bcrypt.hashSync("maria", 10),
        about:
          "I am striving to live a minimum life style as much as possible, up to share and I locate quite centra",
        zip_code: "1102RB",
        street_name: "Berthold Brechtstraat",
        house_nr: 364,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", null, {});
  },
};
