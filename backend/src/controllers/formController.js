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


// Função que cria um novo usuário
async function storeForm(request, response) {
    // Recuperar o TokenID da tabela Tokens usando o token fornecido na requisição
    const dança = request.body.teste;
 
    const getDancaIdQuery = 'SELECT id_danca FROM dancas WHERE nome = ?';
 
    connection.query(getDancaIdQuery, [dança], (err, res) => {
        try {
            if (res[0].id_danca === 0) {
                response.status(400).json({
                    success: false,
                    message: 'Token não encontrado'
                });
            } else {
                const tokenId = res[0].TokenID;
 
                // Preparar o comando de execução no banco para inserir na tabela Users
                const insertUserQuery = 'INSERT INTO User(TokenID, Username, Email, Password) VALUES (?, ?, ?, ?)';
                const checkExistingUserQuery = 'SELECT * FROM User WHERE Username = ? OR Email = ?';
                               
                // Recuperar os dados enviados na requisição
                const params = [
                    tokenId,
                    request.body.username,
                    request.body.email,
                    request.body.password
                ];
 
                // Verifica se já existe um usuário com o mesmo username ou email
                connection.query(checkExistingUserQuery, [request.body.username, request.body.email], (checkError, checkResults) => {
                    if (checkError) {
                        response.status(500).json({
                            success: false,
                            message: "Ocorreu um erro ao verificar a existência do usuário!",
                            error: checkError
                        });
                    } else if (checkResults.length > 0) {
                        response.status(400).json({
                            success: false,
                            message: "Usuário com mesmo username ou email já existe!",
                            data: checkResults
                        });
                    } else {
                        // Se não existir um usuário com o mesmo username ou email, insere o novo usuário
                        connection.query(insertUserQuery, params, (insertError, insertResults) => {
                            if (!insertError) {
                                response.status(201).json({
                                    success: true,
                                    message: `Sucesso! Usuário cadastrado.`,
                                    data: insertResults
                                });
                            } else {
                                response.status(400).json({
                                    success: false,
                                    message: `Não foi possível realizar o cadastro. Verifique os dados informados`,
                                    query: insertError.sql,
                                    sqlMessage: insertError.sqlMessage
                                });
                            }
                        });
                    }
                });
 
            }
        } catch {
            response.status(500).json({
                success: false,
                message: 'Erro ao buscar o TokenID',
                error: err
            });
        }
    });
}

// Função que retorna todos usuários no banco de dados
async function listUsers(request, response) {
    // Preparar o comando de execução no banco
    connection.query('SELECT * FROM formulario', (err, results) => { 
        try {  // Tenta retornar as solicitações requisitadas
            if (results) {  // Se tiver conteúdo 
                response.status(200).json({
                    success: true,
                    message: 'Retorno de informações com sucesso!',
                    data: results
                });
            } else {  // Retorno com informações de erros
                response
                    .status(400)
                    .json({
                        success: false,
                        message: `Não foi possível retornar informações.`,
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

// Função que cria um novo usuário 
async function storeUser(request, response) {
    // Preparar o comando de execução no banco
    const query = 'INSERT INTO formulario(id_danca, id_problema) VALUES(?, ?, ?);';

    // Recuperar os dados enviados na requisição
    const params = Array(
        request.body.id_danca,
        // bcrypt.hashSync(request.body.password, 10),
        request.body.id_problema
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
    const query = "UPDATE formulario SET `id_danca` = ?, `id_problema` = ? WHERE `id_user` = ?";

    // Recuperar os dados enviados na requisição respectivamente
    const params = Array(
        // request.body.ds_id_danca,
        // bcrypt.hashSync(request.body.ds_password, 10),
        // request.body.fl_status,
        request.params.id_danca,  // Recebimento de parametro da rota
        request.params.id_problema  // Recebimento de parametro da rota
    );

    // Executa a ação no banco e valida os retornos para o client que realizou a solicitação
    connection.query(query, params, (err, results) => {
        try {
            if (results) {
                response
                    .status(200)
                    .json({
                        success: true,
                        message: `Sucesso! informações atualizado.`,
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
                    message: "Ocorreu um erro. Não foi possível atualizar informações!",
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

module.exports = {
    listUsers,
    storeUser,
    updateUser,
    deleteUser
}
