"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      order.belongsTo(models.listing);
      order.belongsTo(models.request);
    }
  }
  order.init(
    {
      status: { type: DataTypes.STRING, allowNull: false },
      requestId: { type: DataTypes.INTEGER, allowNull: false },
      listingId: { type: DataTypes.INTEGER, allowNull: false },
    },
    {
      sequelize,
      modelName: "order",
    }
  );
  return order;
};
