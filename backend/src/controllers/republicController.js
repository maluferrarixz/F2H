// Importa as configurações do banco de dados na variável connection
const connection = require('../config/db');
// Importar o pacote dotenv, gerenciador de variáveis de ambiente
require("dotenv").config();

async function RepublicPost(request, response) {
    console.log('republicpost function called');
    const params = [
        request.body.PostID,        
        request.body.id_user
    ]

    const query = "CALL RepublicAction(?, ?);";

    connection.query(query, params, (error, results) => {
        try {
            if (!error) {
                response.status(200).json({
                    success: true,
                    message: 'Retorno de usuários com sucesso!',
                    data: results
                });
            } else {
                response.status(400).json({
                    success: false,
                    message: `Não foi possível retornar os usuários.`,
                    query: error.sql,
                    sqlMessage: error.sqlMessage
                });
            }
        } catch (error) { // Caso aconteça qualquer erro no processo na requisição, retorna uma mensagem amigável
            response.status(500).json({
                success: false,
                message: "Ocorreu um erro. Não foi possível realizar sua requisição!",
                error: error
            });
        }
    });
}

async function isRepublic(request, response) {
    const params = [
        request.body.id_post
        ]

    const query = "SELECT SavedIsEnabled FROM Save WHERE id_post = ?;";

    connection.query(query, params, (error, results) => {
        try {
            if (!error) {
                response.status(200).json({
                    success: true,
                    message: 'Retorno de isEnabled de usuários com sucesso!',
                    data: results
                });
            } else {
                response.status(400).json({
                    success: false,
                    message: `Não foi possível retornar isEnabled dos usuários.`,
                    query: error.sql,
                    sqlMessage: error.sqlMessage
                });
            }
        } catch (error) { // Caso aconteça qualquer erro no processo na requisição, retorna uma mensagem amigável
            response.status(500).json({
                success: false,
                message: "Ocorreu um erro. Não foi possível realizar sua requisição!",
                error: error
            });
        }
    });
}
async function listRepublic(request, response) {
    try {
        
        const savedIsEnabled = 1; // Defina o valor desejado aqui
        const userID = request.params.userID;
        
        const query = "SELECT * FROM Post AS P INNER JOIN republic AS R ON R.id_post = P.id_post WHERE R.RepublicIsEnabled = ? AND R.id_user = ? ORDER BY P.id_post DESC;";

        // Adicione um log para exibir a consulta antes de executá-la
        // console.log("SQL Query:", query, [savedIsEnabled, userID]);

        const results = await new Promise((resolve, reject) => {
            connection.query(query, [savedIsEnabled, userID], (error, results) => {
                if (error) {
                    reject(error);
                } else {
                    console.log("Query Results:", results);
                    resolve({ message: "posts retornados", results });
                }
            });
        });

        response.status(200).json({
            success: true,
            message: 'Retorno de posts favoritados com sucesso!',
            data: results
        });
    } catch (error) {
        console.error("Erro na consulta:", error);

        response.status(500).json({
            success: false,
            message: "Ocorreu um erro. Não foi possível realizar sua requisição!",
            error: error
        });
    }
}
 module.exports = {
    RepublicPost,
    listRepublic
}