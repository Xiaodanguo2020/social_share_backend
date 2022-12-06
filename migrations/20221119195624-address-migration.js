"use strict";

const { DataTypes } = require("sequelize");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("users", "zip_code", {
      type: DataTypes.STRING,
    });
    await queryInterface.addColumn("users", "house_nr", {
      type: DataTypes.INTEGER,
    });
    await queryInterface.addColumn("users", "street_name", {
      type: DataTypes.STRING,
    });
    await queryInterface.addColumn("users", "latitude", {
      type: DataTypes.FLOAT,
    });
    await queryInterface.addColumn("users", "longitude", {
      type: DataTypes.FLOAT,
    });
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("users", "zip_code", {
      type: DataTypes.STRING,
    });
    await queryInterface.removeColumn("users", "house_nr", {
      type: DataTypes.INTEGER,
    });
    await queryInterface.removeColumn("users", "street_name", {
      type: DataTypes.STRING,
    });
    await queryInterface.removeColumn("users", "latitude", {
      type: DataTypes.FLOAT,
    });
    await queryInterface.removeColumn("users", "longitude", {
      type: DataTypes.FLOAT,
    });
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  },
};
