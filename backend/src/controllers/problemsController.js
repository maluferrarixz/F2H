const connection = require('../config/db');
require("dotenv").config();
const jwt = require('jsonwebtoken');

async function problems(request, response) {
    const query = "SELECT * FROM problemas;";

    connection.query(query, (err, results) => {
        try {
            if (results) {
                response
                    .status(200)
                    .json({
                        success: true,
                        message: `Sucesso! problemas encontrados.`,
                        data: results
                    });
            } else {
                response
                    .status(400)
                    .json({
                        success: false,
                        message: `Não foi possível realizar a consulta. `,
                        query: err.sql,
                        sqlMessage: err.sqlMessage
                    });
            }
        } catch (e) {
            response.status(400).json({
                success: false,
                message: "Ocorreu um erro. Não foi possível fazer a consulta.",
                query: err.sql,
                sqlMessage: err.sqlMessage
            });
        }
    });
}

async function updateUserProblemId(request, response) {
    try {
      const { id_user, id_problema } = request.body;
  
      // Verifica se há um ID de dança selecionado
      if (!id_problema) {
        return response.status(400).json({
          success: false,
          message: "Nenhum ID de dança fornecido."
        });
      }
  
      // Constrói a instrução UPDATE
      const updateQuery = `UPDATE users SET id_problema = ? WHERE id_user = ?`;
  
      connection.query(updateQuery, [id_problema, id_user], (err, results) => {
        if (err) {
          return response.status(400).json({
            success: false,
            message: "Erro ao atualizar o ID de dança para o usuário.",
            query: err.sql,
            sqlMessage: err.sqlMessage
          });
        }
  
        response.status(200).json({
          success: true,
          message: "ID de dança atualizado com sucesso para o usuário."
        });
      });
    } catch (error) {
      response.status(500).json({
        success: false,
        message: "Erro interno do servidor.",
        error: error.message
      });
    }
  }
  module.exports = {
    problems,
    updateUserProblemId
};
