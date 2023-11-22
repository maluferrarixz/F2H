// Importa as configurações do banco de dados na variável connection
const connection = require('../config/db');
// Importar o pacote dotenv, gerenciador de variáveis de ambiente
require("dotenv").config();
// Pacote para criptografar a senha de usuario
const bcrypt = require('bcrypt');
// Importar pacote que implementa o protocolo JSON Web Token
const jwt = require('jsonwebtoken');


// Create post

async function createPost(request, response) {
  console.log('==========================================================')
  console.log('=============', request.file.filename)
  
  const query = "INSERT INTO post (id_user, imagem, conteudo, id_danca, id_problema, name) VALUES (?, ?, ?, ?, ?, ?);";

  const params = [
      request.body.id_user,
      request.file.filename,
      request.body.conteudo,
      request.body.selectedDanceId,
      request.body.selectedProblemId,
      request.body.name,
  ];

  connection.query(query, params, (error, result) => {
      if (error) {
          console.error('Erro ao criar o post: ' + error.message);
          return response.status(500).json({ error: 'Erro ao criar o post' });
      }

      response.json({ message: 'Post criado com sucesso', postId: result.insertId });
  });
}
// Consultar todos os posts 
async function getAllPosts(req, res) {
  const selectedDanceId = req.params.selectedDanceId;
  const selectedProblemId = req.params.selectedProblemId;

  // Preparar o comando de execução no banco
  const query = 'SELECT * FROM post WHERE id_danca = ? AND id_problema = ? ORDER BY 1 DESC';

  connection.query(query, [selectedDanceId, selectedProblemId], (err, results) => {
    if (err) {
      res.status(400).json({
        success: false,
        message: "Erro mesmo.",
        query: err.sql,
        sqlMessage: err.sqlMessage
      });
    } else if (results.length > 0) {
      res.status(200).json({
        success: true,
        message: 'Success in returning user information.',
        data: results
      });
    } else {
      res.status(400).json({
        success: false,
        message: `Unable to return user information. No posts found.`,
      });
    }
  });
}

//   const userID = request.params.userID;// Recupere o id do parâmetro da rota

//   const query = `SELECT * FROM post WHERE id_user = ?`;
//   const params = [userID];

// connection.query(query, params, (error, result) => {
//   if (error) {
//     console.error('Erro ao visualizar seus posts: ' + error.message);
//     return response.status(500).json({ error: 'Erro ao criar o post' });
//   }

//   response.json({ message: 'Post visualizado!', result});
// });

// async function statusSave(request, response) {

  
//   const query = "UPDATE post set status_favoritado = 1 where id_user = ?";

//   const params = [

//       request.body.name,
//   ];

//   connection.query(query, params, (error, result) => {
//       if (error) {
//           console.error('Erro ao criar o post: ' + error.message);
//           return response.status(500).json({ error: 'Erro ao criar o post' });
//       }

//       response.json({ message: 'Post criado com sucesso', postId: result.insertId });
//   });
// }
async function getAllPostsStart(req, res) {

  // Preparar o comando de execução no banco
  const query = 'SELECT * FROM post ORDER BY 1 DESC';

  connection.query(query, (err, results) => {
    if (err) {
      res.status(400).json({
        success: false,
        message: "Erro mesmo.",
        query: err.sql,
        sqlMessage: err.sqlMessage
      });
    } else if (results.length > 0) {
      res.status(200).json({
        success: true,
        message: 'Success in returning user information.',
        data: results
      });
    } else {
      res.status(400).json({
        success: false,
        message: `Unable to return user information. No posts found.`,
      });
    }
  });
}


module.exports = {
    createPost,
    getAllPosts,
    getAllPostsStart
}