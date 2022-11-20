"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class request extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      request.belongsTo(models.user);
      request.belongsToMany(models.listing, {
        through: "order",
        foreignKey: "requestId",
      });
    }
  }
  request.init(
    {
      title: { type: DataTypes.STRING, allowNull: false },
      description: { type: DataTypes.STRING, allowNull: false },
      image: DataTypes.STRING,
      active: { type: DataTypes.BOOLEAN, allowNull: false },
      start_date: { type: DataTypes.DATE, allowNull: false },
      end_date: { type: DataTypes.DATE, allowNull: false },
    },
    {
      sequelize,
      modelName: "request",
    }
  );
  return request;
};
