'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

      await queryInterface.bulkInsert('Funcionarios', [
        {
          nome: 'Rodrigo do Nascimento Cruz',
          genero: 'Masculino',
          idade: 32,
          funcao: 'desenvolvedor',
          tempoTrabalho: 1,
          salario: 5000,
          estadoCivil: 'casado',
          endereco: 'Rua José Santana 15, colubandê - SG/RJ',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nome: 'José Carlos da Silva',
          genero: 'Masculino',
          idade: 32,
          funcao: 'Gerente',
          tempoTrabalho: 5,
          salario: 6000,
          estadoCivil: 'casado',
          endereco: 'Rua Gonçales Pereira 1000 - SG/RJ',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nome: 'Leticia',
          genero: 'Feminino',
          idade: 22,
          funcao: 'desenvolvedora',
          tempoTrabalho: 2,
          salario: 7000,
          estadoCivil: 'solteira',
          endereco: 'Rua Teixeira Queiroz nº 2547,Centro/SP',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nome: 'Rivanilson Rodrigues da Cruz',
          genero: 'Masculino',
          idade: 56,
          funcao: 'pintor',
          tempoTrabalho: 10,
          salario: 3800,
          estadoCivil: 'casado',
          endereco: 'Rua Pampulha 107, Almerinda - SG/RJ',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nome: 'João Lopes',
          genero: 'Masculino',
          idade: 40,
          funcao: 'Engenheiro',
          tempoTrabalho: 5,
          salario: 8000,
          estadoCivil: 'solteiro',
          endereco: 'Rua Lopes de Albatroz 607 - MG',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nome: 'Jéssica Ferreira Cruz',
          genero: 'Feminino',
          idade: 32,
          funcao: 'desenvolvedor',
          tempoTrabalho: 1,
          salario: 5000,
          estadoCivil: 'casado',
          endereco: 'Rua José Santana 15, colubandê - SG/RJ',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nome: 'Rodrigo do Nascimento Cruz',
          genero: 'Masculino',
          idade: 32,
          funcao: 'desenvolvedor',
          tempoTrabalho: 1,
          salario: 5000,
          estadoCivil: 'casado',
          endereco: 'Rua José Santana 15, colubandê - SG/RJ',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nome: 'Rodrigo do Nascimento Cruz',
          genero: 'Masculino',
          idade: 32,
          funcao: 'desenvolvedor',
          tempoTrabalho: 1,
          salario: 5000,
          estadoCivil: 'casado',
          endereco: 'Rua José Santana 15, colubandê - SG/RJ',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nome: 'Rodrigo do Nascimento Cruz',
          genero: 'Masculino',
          idade: 32,
          funcao: 'desenvolvedor',
          tempoTrabalho: 1,
          salario: 5000,
          estadoCivil: 'casado',
          endereco: 'Rua José Santana 15, colubandê - SG/RJ',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nome: 'Rodrigo do Nascimento Cruz',
          genero: 'Masculino',
          idade: 32,
          funcao: 'desenvolvedor',
          tempoTrabalho: 1,
          salario: 5000,
          estadoCivil: 'casado',
          endereco: 'Rua José Santana 15, colubandê - SG/RJ',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nome: 'Rodrigo do Nascimento Cruz',
          genero: 'Masculino',
          idade: 32,
          funcao: 'desenvolvedor',
          tempoTrabalho: 1,
          salario: 5000,
          estadoCivil: 'casado',
          endereco: 'Rua José Santana 15, colubandê - SG/RJ',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nome: 'Rodrigo do Nascimento Cruz',
          genero: 'Masculino',
          idade: 32,
          funcao: 'desenvolvedor',
          tempoTrabalho: 1,
          salario: 5000,
          estadoCivil: 'casado',
          endereco: 'Rua José Santana 15, colubandê - SG/RJ',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nome: 'Rodrigo do Nascimento Cruz',
          genero: 'Masculino',
          idade: 32,
          funcao: 'desenvolvedor',
          tempoTrabalho: 1,
          salario: 5000,
          estadoCivil: 'casado',
          endereco: 'Rua José Santana 15, colubandê - SG/RJ',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nome: 'Rodrigo do Nascimento Cruz',
          genero: 'Masculino',
          idade: 32,
          funcao: 'desenvolvedor',
          tempoTrabalho: 1,
          salario: 5000,
          estadoCivil: 'casado',
          endereco: 'Rua José Santana 15, colubandê - SG/RJ',
          createdAt: new Date(),
          updatedAt: new Date()
        }], {});
    
  },

  async down (queryInterface, Sequelize) {
   
      await queryInterface.bulkDelete('Funcionarios', null, {});
     
  }
};
