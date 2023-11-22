// Importa as configurações do banco de dados na variável connection
const connection = require('../config/db');
// Importar o pacote dotenv, gerenciador de variáveis de ambiente
require("dotenv").config();
// Pacote para criptografar a senha de usuario
const bcrypt = require('bcrypt');
// Importar pacote que implementa o protocolo JSON Web Token
const jwt = require('jsonwebtoken');

async function getAllPostsProfile(request, response) {
    const userID = request.params.userID; // Recupere o id do parâmetro da rota
  
    console.log("oi")
    connection.query('SELECT * FROM post WHERE id_user = ? order by 1 desc', [userID], (err, results) => {
      try {
        if (results) {
          // Adicione um log para exibir os resultados da query
          console.log("Query Results:", results);
  
          response
            .status(201)
            .json({
              success: true,
              message: `Sucesso! posts do usuario:.`,
              data: results
            });
        } else {
          response
            .status(400)
            .json({
              success: false,
              message: `Não foi possível realizar a visu dos post. `,
              query: err.sql,
              sqlMessage: err.sqlMessage
            });
        }
      } catch (e) { // Caso aconteça algum erro na execução
        response.status(400).json({
          succes: false,
          message: "Ocorreu um erro. Não foi possível visu os posts usuário!",
          query: err.sql,
          sqlMessage: err.sqlMessage
        });
      }
    });
  }
  module.exports = {
    getAllPostsProfile
}  