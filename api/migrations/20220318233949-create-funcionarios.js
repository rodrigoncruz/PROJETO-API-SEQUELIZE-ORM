'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Funcionarios', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nome: {
        type: Sequelize.STRING
      },
      genero: {
        type: Sequelize.STRING
      },
      idade: {
        type: Sequelize.INTEGER
      },
      funcao: {
        type: Sequelize.STRING
      },
      tempoTrabalho: {
        type: Sequelize.INTEGER
      },
      salario: {
        type: Sequelize.INTEGER
      },
      estadoCivil: {
        type: Sequelize.STRING
      },
      endereco: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Funcionarios');
  }
};