// Importa as configurações do banco de dados na variável connection
const connection = require('../config/db');
// Importar o pacote dotenv, gerenciador de variáveis de ambiente
require("dotenv").config();
// Importar pacote que implementa o protocolo JSON Web Token
const jwt = require('jsonwebtoken');

// Authentication
async function findUser(request, response) {
    // Preparar o comando de execução no banco
    const query = "SELECT * FROM users WHERE `id_user` = ?";
    
    // Recuperar credenciais informadas
    const params = [request.body.id];

    // Executa a ação no banco e valida os retornos para o cliente que realizou a solicitação
    connection.query(query, params, (err, results) => {
        try {            
            if (results.length > 0) {                
                const user = {
                    id: results[0].id,
                    email: results[0].email,
                    nome: results[0].nome,
                    senha: results[0].senha,
                };

                const id = results[0].id;
                const token = jwt.sign({ userId: id }, 'the-super-strong-secret', { expiresIn: 300 });
                
                user.token = token;
                
                response
                .status(200)
                .json({
                    success: true,
                    message: `Sucesso! Usuário conectado.`,
                    data: user
                });
            } else {
                response
                    .status(404)
                    .json({
                        success: false,
                        message: `Usuário não encontrado. Verifique o ID informado`,
                        query: err.sql,
                        sqlMessage: err.sqlMessage
                    });
            }
        } catch (e) {
            response.status(500).json({
                success: false,
                message: "Ocorreu um erro ao buscar o usuário.",
                error: e
            });
        }
    });
}

module.exports = {
    findUser
}
