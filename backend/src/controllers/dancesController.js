const connection = require('../config/db');
require("dotenv").config();
const jwt = require('jsonwebtoken');

async function dances(request, response) {
    const query = "SELECT * FROM dancas;";

    connection.query(query, (err, results) => {
        try {
            if (results) {
                response
                    .status(200)
                    .json({
                        success: true,
                        message: `Sucesso! Danças encontradas.`,
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

async function updateUserDanceId(request, response) {
    try {
      const { id_user, id_danca } = request.body;
  
      // Verifica se há um ID de dança selecionado
      if (!id_danca) {
        return response.status(400).json({
          success: false,
          message: "Nenhum ID de dança fornecido."
        });
      }
  
      // Constrói a instrução UPDATE
      const updateQuery = `UPDATE users SET id_danca = ? WHERE id_user = ?`;
  
      connection.query(updateQuery, [id_danca, id_user], (err, results) => {
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
    dances,
    updateUserDanceId
};
