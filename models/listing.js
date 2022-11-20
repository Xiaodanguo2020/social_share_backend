"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class listing extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      listing.belongsTo(models.user);
      listing.belongsToMany(models.request, {
        through: "order",
        foreignKey: "listingId",
      });
    }
  }
  listing.init(
    {
      title: { type: DataTypes.STRING, allowNull: false },
      description: { type: DataTypes.STRING, allowNull: false },
      image: DataTypes.STRING,
      available: { type: DataTypes.BOOLEAN, allowNull: false },
      location: DataTypes.STRING,
      image: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "listing",
    }
  );
  return listing;
};
