// Módulo de configuração da webapi, módulo de aplicação

// Importar o pacote express (servidor)
const express = require('express');
// Responsável por lidar com requisições externas
const cors = require('cors');
// Importar as rotas para serem executadas na aplicação
const userRouter = require('./routes/usersRouter');
const loginRouter = require('./routes/loginRouter');
const findUserRouter = require('./routes/findUserRouter');
const postRouter = require('./routes/postRouter');
const isSaveRouter = require('./routes/isSaveRouter');
const saveRouter = require('./routes/saveRouter');
const listSaveRouter = require('./routes/listSaveRouter');
const dancesRouter = require('./routes/dancesRouter')
const problemsRouter = require('./routes/problemsRouter')
const postProfileRouter = require('./routes/postProfileRouter')
const republicRouter = require('./routes/republicRouter')
const listRepublicRouter = require('./routes/listRepublicRouter')
// const republicRouter = require('./routes/republicRouter')
const app = express();

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
 
// Torna a pasta public "visível" atrávez da URL, para assim mostrar as imagens
app.use('/uploads', express.static(__dirname + '\\public'));
// Instanciar o express na variável app

app.use(express.json());
// Habilitar o recebimento de requests em formato JSON
app.use(cors())
// Habilitar as rotas na aplicação
app.use('/api', userRouter);
app.use('/api/auth', loginRouter);
app.use('/api/find', findUserRouter);
app.use('/api/post', postRouter);
app.use('/api/save/verify', isSaveRouter);
app.use('/api/save/', saveRouter);
app.use('/api/list', listSaveRouter);
app.use('/api/dances', dancesRouter);
app.use('/api/updateUserDanceId', dancesRouter);
app.use('/api/updateUserproblemId', problemsRouter);
app.use('/api/problems', problemsRouter);
app.use('/api/postProfile', postProfileRouter);
app.use('/api/republic/', republicRouter);
app.use('/api/list', listRepublicRouter);
// app.use('/api/republic/', republicRouter);
// app.use('/find', findUserRouter);
// Setar a porta do servidor, a parir do arquivo .env
app.set('port', process.env.PORT || 1903);
module.exports = app;
