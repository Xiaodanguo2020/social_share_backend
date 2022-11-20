"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      category.hasMany(models.listing);
      category.hasMany(models.request);
      // define association here
    }
  }
  category.init(
    {
      category: { type: DataTypes.STRING, allowNull: false },
    },
    {
      sequelize,
      modelName: "category",
    }
  );
  return category;
};
