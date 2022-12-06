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
        image:
          "https://ca.slack-edge.com/T0DK39WAJ-U042P763K6K-c84d9d64c423-512",
        latitude: 52.36366,
        longitude: 4.92844,
      },
      {
        name: "Nigel",
        email: "nigel@nigel.com",
        password: bcrypt.hashSync("nigel", 10),
        about:
          "I am striving to live a minimum life style as much as possible, up to share and I locate quite centra",
        zip_code: "1017JB",
        street_name: "Kerkstraat",
        house_nr: 1674,
        createdAt: new Date(),
        updatedAt: new Date(),
        image:
          "https://ca.slack-edge.com/T0DK39WAJ-U03P16ZCVRN-7a14eec05a7b-512",
        latitude: 52.36441421508789,
        longitude: 4.887009620666504,
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
        image:
          "https://ca.slack-edge.com/T0DK39WAJ-U03H9HWB71Q-b62510f891e3-512",
        latitude: 52.38444137573242,
        longitude: 4.874081134796143,
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
        image:
          "https://ca.slack-edge.com/T0DK39WAJ-U01667UMMB2-b76044690f9e-512",
        latitude: 52.3847346,
        longitude: 4.87647,
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
        image:
          "https://ca.slack-edge.com/T0DK39WAJ-U03GJTTB4PQ-3b3d808921cb-512",
        latitude: 52.318267822265625,
        longitude: 4.9473419189453125,
      },
      {
        name: "Estaban",
        email: "estaban@estaban.com",
        password: bcrypt.hashSync("estaban", 10),
        about:
          "I am striving to live a minimum life style as much as possible, up to share and I locate quite centra",
        zip_code: "1053VE",
        street_name: "Bilderdijkkade",
        house_nr: 896,
        createdAt: new Date(),
        updatedAt: new Date(),
        image:
          "https://ca.slack-edge.com/T0DK39WAJ-U03MLHHGV2P-58764610c18e-512",
        latitude: 52.366233825683594,
        longitude: 4.870893955230713,
      },

      {
        name: "Pratima",
        email: "pratima@pratima.com",
        password: bcrypt.hashSync("pratima", 10),
        about:
          "I am striving to live a minimum life style as much as possible, up to share and I locate quite centra",
        zip_code: "1035HL",
        street_name: "Potvisstraat",
        house_nr: 87,
        createdAt: new Date(),
        updatedAt: new Date(),
        image:
          "https://ca.slack-edge.com/T0DK39WAJ-U03CCUEGK98-0c3a155c4156-512",
        latitude: 52.4227181,
        longitude: 4.8839247,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", null, {});
  },
};
