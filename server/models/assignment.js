'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Assignment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Assignment.belongsTo(models.Student, { foreignKey: 'studentId' })
    }
  }
  Assignment.init({
    name: DataTypes.STRING,
    unit: DataTypes.INTEGER,
    gitHubURL: DataTypes.STRING,
    deployedURL: DataTypes.STRING,
    completed: DataTypes.BOOLEAN,
    studentId: {
      type: DataTypes.INTEGER,
      onDelete: 'CASCADE',
      references: {
        model: 'students',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'Assignment',
    tableName: 'assignments'
  });
  return Assignment;
};