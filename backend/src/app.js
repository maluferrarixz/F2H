// Módulo de configuração da webapi, módulo de aplicação

// Importar o pacote express (servidor)
const express = require('express');
// Responsável por lidar com requisições externas
const cors = require('cors');
// Importar as rotas para serem executadas na aplicação
const userRouter = require('./routes/usersRouter');
const loginRouter = require('./routes/loginRouter');
const findUserRouter = require('./routes/findUserRouter');

// Instanciar o express na variável app
const app = express();
app.use(express.json());
// Habilitar o recebimento de requests em formato JSON
app.use(cors())
// Habilitar as rotas na aplicação
app.use('/api', userRouter);
app.use('/api/auth', loginRouter);
app.use('/find', findUserRouter);
// Setar a porta do servidor, a parir do arquivo .env
app.set('port', process.env.PORT || 1903);

module.exports = app;
