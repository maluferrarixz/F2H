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
    const query = "INSERT INTO post (id_user, imagem, conteudo, status_favoritado, status_republicado, id_danca, id_problema) VALUES (?, ?, ?, ?, ?, ?);";

    connection.query((error, results) => {
      if (error) {
        console.error('Erro ao recuperar o post: ' + error.message);
        return res.status(500).json({ error: 'Erro ao recuperar o post' });
      }
  
      if (results.length === 0) {
        return response.status(404).json({ error: 'Post não encontrado' });
      }
  
      const params = [
        categoryId,
        request.body.id_user,
        request.body.imagem,
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
    });


}



// Consultar todos os posts com JOIN para obter informações do autor
// async function getAllPosts(req, res) {
//   const query = `
//     SELECT
//       posts.ID AS post_id,
//       posts.image AS post_image,
//       posts.content AS post_content
//     FROM
//       posts
//     JOIN
//       users ON posts.userId = users.ID
//   `;

//   connection.query(query, (error, results) => {
//     if (error) {
//       console.error('Erro ao recuperar os posts: ' + error.message);
//       return res.status(500).json({ error: 'Erro ao recuperar os posts' });
//     }

//     res.json(results);
//   });
// }


module.exports = {
    createPost
    // getAllPosts
}