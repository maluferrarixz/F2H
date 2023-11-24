/**
 INFORMAÇÕES DO CONTROLLER

 1. Executa funções assíncronas que retornam uma Promise que é resolvida com um valor de retorno;
 2. Parâmetro request (requisição): é o pedido que um cliente (usuário) realiza a nosso servidor;
 3. Parâmetro response (resposta): é a resosta que o servidor envia ao cliente (usuário);
 4. Com a variável connection que possui as configurações do banco de dados, utilizamos a função query para realizar os comandos de gerenciamento do banco de dados;
 5. Validamos o retorno da requisição, caso tenha algum erro
 6. Retornamos as informações em formato JSON com chaves e valores para o client
 7. Try/Catch: utilizado para tratar erros que podem acontecer dentro do sistema

*/

// Importa as configurações do banco de dados na variável connection
const connection = require('../config/db');

// Pacote para criptografar a senha de usuario
const bcrypt = require('bcrypt');

// Função que retorna todos usuários no banco de dados
async function listUsers(request, response) {
    // Preparar o comando de execução no banco
    connection.query('SELECT * FROM users', (err, results) => { 
        try {  // Tenta retornar as solicitações requisitadas
            if (results) {  // Se tiver conteúdo 
                response.status(200).json({
                    success: true,
                    message: 'Retorno de usuarios com sucesso!',
                    data: results
                });
            } else {  // Retorno com informações de erros
                response
                    .status(400)
                    .json({
                        success: false,
                        message: `Não foi possível retornar os usuários.`,
                        query: err.sql,
                        sqlMessage: err.sqlMessage
                    });
            }
        } catch (e) {  // Caso aconteça qualquer erro no processo na requisição, retorna uma mensagem amigável
            response.status(400).json({
                succes: false,
                message: "Ocorreu um erro. Não foi possível realizar sua requisição!",
                query: err.sql,
                sqlMessage: err.sqlMessage
            })
        }   
    });
}
async function listUserInfos(request, response) {
    const userEmail = request.params.userEmail;// Recupere o email do parâmetro da rota
  
    // Preparar o comando de execução no banco
    connection.query('SELECT * FROM users WHERE email = ?', [userEmail], (err, results) => {
      if (err) {
        response.status(400).json({
          success: false,
          message: "An error has occurred. Unable to return user informations.",
          query: err.sql,
          sqlMessage: err.sqlMessage
        });
      } else if (results.length > 0) {
        response.status(200).json({
          success: true,
          message: 'Success in returning user informations.',
          data: results[0] // Suponhamos que você deseja retornar apenas o primeiro resultado
        });
      } else {
        response.status(400).json({
          success: false,
          message: `Unable to return user informations. User not found.`,
        });
      }
    });
  }

// Função que cria um novo usuário 
async function storeUser(request, response) {
    // Preparar o comando de execução no banco
    const query = 'INSERT INTO users(nome, senha, email) VALUES(?, ?, ?);';

    // Recuperar os dados enviados na requisição
    const params = Array(
        request.body.name,
        bcrypt.hashSync(request.body.password, 10),
        request.body.email
    );

console.log(request.body.name,)
    // Executa a ação no banco e valida os retornos para o client que realizou a solicitação
    connection.query(query, params, (err, results) => {
        try {
            if (results) {
                response
                    .status(201)
                    .json({
                        success: true,
                        message: `Sucesso! Usuário cadastrado.`,
                        data: results
                    });
            } else {
                response
                    .status(400)
                    .json({
                        success: false,
                        message: `Não foi possível realizar o cadastro. Verifique os dados informados`,
                        query: err.sql,
                        sqlMessage: err.sqlMessage
                    });
            }
        } catch (e) { // Caso aconteça algum erro na execução
            response.status(400).json({
                    succes: false,
                    message: "Ocorreu um erro. Não foi possível cadastrar usuário!",
                    query: err.sql,
                    sqlMessage: err.sqlMessage
                });
        }
    });
}

// Função que atualiza o usuário no banco
async function updateUser(request, response) {
    // Preparar o comando de execução no banco
    const query = "UPDATE users SET `nome` = ?, `senha` = ?, `email` = ? WHERE `id_user` = ?";

    // Recuperar os dados enviados na requisição respectivamente
    const params = Array(
        request.body.nome,
        bcrypt.hashSync(request.body.senha, 10),
        request.body.email,
        request.params.id  // Recebimento de parametro da rota
    );

    // Executa a ação no banco e valida os retornos para o client que realizou a solicitação
    connection.query(query, params, (err, results) => {
        try {
            if (results) {
                response
                    .status(200)
                    .json({
                        success: true,
                        message: `Sucesso! Usuário atualizado.`,
                        data: results
                    });
            } else {
                response
                    .status(400)
                    .json({
                        success: false,
                        message: `Não foi possível realizar a atualização. Verifique os dados informados`,
                        query: err.sql,
                        sqlMessage: err.sqlMessage
                    });
            }
        } catch (e) { // Caso aconteça algum erro na execução
            response.status(400).json({
                    succes: false,
                    message: "Ocorreu um erro. Não foi possível atualizar usuário!",
                    query: err.sql,
                    sqlMessage: err.sqlMessage
                });
        }
    });
}

// Função que remove usuário no banco
async function deleteUser(request, response) {
    // Preparar o comando de execução no banco
    const query = "DELETE FROM users WHERE `id_user` = ?";

    // Recebimento de parametro da rota
    const params = Array(
        request.params.id
    );

    // Executa a ação no banco e valida os retornos para o client que realizou a solicitação
    connection.query(query, params, (err, results) => {
        try {
            if (results) {
                response
                    .status(200)
                    .json({
                        success: true,
                        message: `Sucesso! Usuário deletado.`,
                        data: results
                    });
            } else {
                response
                    .status(400)
                    .json({
                        success: false,
                        message: `Não foi possível realizar a remoção. Verifique os dados informados`,
                        query: err.sql,
                        sqlMessage: err.sqlMessage
                    });
            }
        } catch (e) { // Caso aconteça algum erro na execução
            response.status(400).json({
                    succes: false,
                    message: "Ocorreu um erro. Não foi possível deletar usuário!",
                    query: err.sql,
                    sqlMessage: err.sqlMessage
                });
        }
    });
}

async function getUserById (request, response) {
        // Preparar o comando de execução no banco
        const query = "SELECT nome, senha, email FROM users WHERE `id_user` = ?";

        // Recebimento de parametro da rota
        const params = Array(
            request.params.id,
            request.body.nome,
            request.body.senha,
            request.body.email
        );
    
        // Executa a ação no banco e valida os retornos para o client que realizou a solicitação
        connection.query(query, params, (err, results) => {
            try {
                if (results) {
                    response
                        .status(200)
                        .json({
                            success: true,
                            message: `Sucesso! Usuário deletado.`,
                            data: results
                        });
                } else {
                    response
                        .status(400)
                        .json({
                            success: false,
                            message: `Não foi possível realizar a remoção. Verifique os dados informados`,
                            query: err.sql,
                            sqlMessage: err.sqlMessage
                        });
                }
            } catch (e) { // Caso aconteça algum erro na execução
                response.status(400).json({
                        succes: false,
                        message: "Ocorreu um erro. Não foi possível deletar usuário!",
                        query: err.sql,
                        sqlMessage: err.sqlMessage
                    });
            }
        });
    }

async function updateUser(request, response) {
        // if(request.file) {
        //     const query = `UPDATE users
        //     SET user_name = ?, user_email = ?, img_profile = ?
        //     WHERE user_id = ?;`;
        //     const params = Array(
        //         request.body.nome,
        //         request.body.email, 
        //         request.file.filename,
        //         request.body.userId
        //         );
        //         console.log('params :', params);
    
        //         connection.query(query, params, (err, results) => {
        //             console.log('query :', query);
        //                 try {
        //                     if (results.affectedRows > 0) {
        //                         response.status(200).json({
        //                             success: true,
        //                             message: `Sucesso! Usuário atualizado.`,
        //                             data: results
        //                         });
        //                     } else {
        //                         response.status(400).json({
        //                             success: false,
        //                             message: `Não foi possível realizar a atualização. Verifique os dados informados`,
        //                             query: err,
        //                             sqlMessage: err
        //                         });
        //                     }
        //                 } catch (e) {
        //                     response.status(400).json({
        //                         success: false,
        //                         message: "Ocorreu um erro. Não foi possível atualizar usuário!",
        //                         query: err,
        //                         sqlMessage: err
        //                     });
        //                 }
        //             });
        // } else {
            console.log('bbbbbbbbbbbbbbb')
            console.log('==========request.body.user_Id, :', request.body.user_Id);
            const query = `UPDATE users SET nome = ?, email = ? WHERE id_user = ?;`;
            const params = Array(
                request.body.nome,
                request.body.email,
                request.body.user_Id,

            );
            console.log('params :', params);
    
                connection.query(query, params, (err, results) => {
                    console.log('query :', query);
                        try {
                            if (results.affectedRows > 0) {
                                response.status(200).json({
                                    success: true,
                                    message: `Sucesso! Usuário atualizado.`,
                                    data: results
                                });
                            } else {
                                response.status(400).json({
                                    success: false,
                                    message: `Não foi possível realizar a atualização. Verifique os dados informados`,
                                    query: err,
                                    sqlMessage: err
                                });
                            }
                        } catch (e) {
                            response.status(400).json({
                                success: false,
                                message: "Ocorreu um erro. Não foi possível atualizar usuário!",
                                query: err,
                                sqlMessage: err
                            });
                        }
                    });
        }
    // }
    
    module.exports = {
    listUsers,
    listUserInfos,
    storeUser,
    updateUser,
    deleteUser,
    getUserById
}
