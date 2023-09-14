'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Question extends Model {
    static associate({ Theme }) {
      this.belongsTo(Theme, { foreignKey: 'idTheme' });
    }
  }
  Question.init(
    {
      text: {
        type: DataTypes.TEXT,
      },
      ansver: {
        type: DataTypes.TEXT,
      },
      idTheme: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Themes',
          key: 'id',
        },
      },
      count: {
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: 'Question',
    }
  );
  return Question;
};
