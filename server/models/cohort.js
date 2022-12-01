'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cohort extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      
        Cohort.belongsTo(models.Teacher, { foreignKey: 'teacherId' });
        Cohort.hasMany(models.Student, { foreignKey: 'classId' }) 
      
    }
  }
  Cohort.init({
    name: DataTypes.STRING,
    teacherId: {
      type: DataTypes.INTEGER,
      onDelete: 'CASCADE',
      references: {
        model: 'teachers',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'Cohort',
    tableName: 'cohorts'
  });
  return Cohort;
};