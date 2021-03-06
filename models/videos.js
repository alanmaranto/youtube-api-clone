"use strict";

const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Videos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.channelId = this.belongsTo(models.Channels, {
        foreignKey: "channelId",
      });
    }
  }
  Videos.init(
    {
      title: DataTypes.STRING,
      channelId: {
        type: DataTypes.INTEGER,
        references: {
          model: "Channels",
          key: "id",
        },
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Videos",
    }
  );
  return Videos;
};
