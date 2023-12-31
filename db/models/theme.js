'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Theme extends Model {
    static associate({ Question }) {
      this.hasMany(Question, { foreignKey: 'idTheme' });
    }
  }
  Theme.init(
    {
      name: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Theme',
    }
  );
  return Theme;
};
