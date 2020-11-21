'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Question extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Question.belongsTo(models.User, { foreignKey: 'userId' });
      Question.hasMany(models.Answer, { foreignKey: 'questionId' });
    }
  };
  Question.init({
    userId: DataTypes.INTEGER,
    question: DataTypes.TEXT,
    rating: DataTypes.INTEGER,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Question',
  });
  return Question;
};