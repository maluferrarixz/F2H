
// Importar o modulo de Router do express
const { Router } = require('express');
// Instanciar o Router na variável router
const router = Router();
// Importar as funções (processamento da requisição) do controller
const { problems } = require('../controllers/problemsController');
const {updateUserProblemId}  = require('../controllers/problemsController');

 
router.get('/problems', problems);
router.post('/updateUserProblemId', updateUserProblemId);

module.exports = router;