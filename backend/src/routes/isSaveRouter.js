// Importar o modulo de Router do express
const { Router } = require('express');
// Instanciar o Router na variável router
const router = Router();
// Importar as funções (processamento da requisição) do controller
const { isSave } = require('../controllers/saveController');

router.post('/save/verify', isSave);

module.exports = router;