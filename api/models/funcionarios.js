'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Funcionarios extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Funcionarios.init({
    nome: DataTypes.STRING,
    genero: DataTypes.STRING,
    idade: DataTypes.INTEGER,
    funcao: DataTypes.STRING,
    tempoTrabalho: DataTypes.INTEGER,
    salario: DataTypes.INTEGER,
    estadoCivil: DataTypes.STRING,
    endereco: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Funcionarios',
  });
  return Funcionarios;
};