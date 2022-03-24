
<center><img src="https://img.icons8.com/ios-filled/50/000000/clapperboard.png"/> </center>
<h1> Projeto responsável por desenvolver uma API Rest em Node.js utilizando o framework EXPRESS </h1>

<img src="https://img.icons8.com/color/48/000000/expand-arrow--v1.png"/> <center><h2>O projeto:</h2>

<p> O projeto de final do módulo 4 pela Resilia Educação. O projeto foi desenvolvido foi capaz de realizar uma aplicação que é capaz de gerenciar a lista de funcionários do um cinema local, porém a aplicação pode ser desenvolvida para outro tipo de serviço. 
Dessa forma, utilizou-se o banco de dados relacional (mysql), Api to tipo Rest e toda a organização foi baseada no conceito MVC.</p>


<p> Foi utilizada a linguagem JavaScript com Node.js, a utilização do sequelize, além de todo o framework Express e o banco relacional Mysql.

<h2>Dependências utilizadas:</h2>

```js
"dependencies": {
   "express": "^4.17.3",
    "mysql2": "^2.3.3",
    "path": "^0.12.7",
    "sequelize": "^6.17.0",
    "sequelize-cli": "^6.4.1"
}
```


<h2>As dependências do desenvolvimento:</h2>

```js
"devDependencies": {
    "nodemon": "^2.0.15"
}
```
Caso deseje instalar o nodemon em suas dependências para o ambiente de aplicação, basta copiar o comando abaixo e utilzar em seu terminal, após o comando das dependências obrigatórias.
```js
npm install --save-dev nodemon
```
<h2>em api/config/config.json use sua configuração pessoal do mysql para rodar - modifique em "development":</h2>

```js
{
  "development": {
    "username": "root", //coloque seu username
    "password": " ", //coloque seu password
    "database": "Funcionarios", // deixe essa database
    "host": "127.0.0.1", // coloque seu host
    "dialect": "mysql" // deixe mysql
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
```

<h2>Comando para iniciar o terminal:</h2>

```js
npm start
```


Vale ressaltar que foi utilizada a versão v16.14.0. do Node.js, dessa forma para realizar a instalação é necessário verificar uma versão igual ou superior a informada acima.


<h2>As rotas da API:</h2>

Inicialmente há apenas a rota <b>"/funcionarios"</b>. Com a utilização do CRUD temos:

```js

router.get('/funcionarios', FuncionarioController.pegaTodosOsFuncionarios);
router.get('/funcionarios/:id', FuncionarioController.pegaUmFuncionario);
router.post('/funcionarios', FuncionarioController.criaFuncionario);
router.put('/funcionarios/:id', FuncionarioController.atualizaFuncionario);
router.delete('/funcionarios/:id', FuncionarioController.apagaFuncionario);

```

Atente-se que o arquivo não pode ficar vazio, a fim de evitar erros em sua aplicação. 

```js

npx sequelize-cli db:migrate
```

