'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

      await queryInterface.bulkInsert('Funcionarios', [
        {
          nome: 'Rodrigo Cruz',
          ativo: true,
          email: 'rodrigo@gmail.com',
          role: 'dev',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nome: 'Jéssica Cruz',
          ativo: true,
          email: 'Jéssica@gmail.com',
          role: 'desinger',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nome: 'João Ferreira',
          ativo: true,
          email: 'joão@gmail.com',
          role: 'professor',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nome: 'Rivanilson Cruz',
          ativo: true,
          email: 'rivanilson@gmail.com',
          role: 'pintor',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nome: 'Lenalda Cruz',
          ativo: true,
          email: 'lenalda@gmail.com',
          role: 'professora',
          createdAt: new Date(),
          updatedAt: new Date()
        }], {});
    
  },

  async down (queryInterface, Sequelize) {
   
      await queryInterface.bulkDelete('Funcionarios', null, {});
     
  }
};
