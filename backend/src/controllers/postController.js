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
    const query = "INSERT INTO post (id_user, imagem, conteudo, status_favoritado, status_republicado, id_danca, id_problema) VALUES (?, ?, ?, 2, 2, ?, ?);";
   
  
      const params = [
        // categoryId,
        request.body.id_user,
        request.file.filename,
        request.body.conteudo,
        request.body.status_favoritado,
        request.body.status_republicado,
        request.body.id_danca,
        request.body.id_problema,
    ];

    connection.query(query, params, (error, result) => {
        if (error) {
          console.error('Erro ao criar o post: ' + error.message);
          return response.status(500).json({ error: 'Erro ao criar o post' });
        }
    
        response.json({ message: 'Post criado com sucesso', postId: result.insertId });
      });
  

}



// Consultar todos os posts com JOIN para obter informações do autor
async function getAllPosts(req, res) {
  const query = `
    SELECT * from post
  `;

  connection.query(query, (error, results) => {
    if (error) {
      console.error('Erro ao recuperar os posts: ' + error.message);
      return res.status(500).json({ error: 'Erro ao recuperar os posts' });
    }

    res.json(results);
  });
}


module.exports = {
    createPost,
    getAllPosts
}