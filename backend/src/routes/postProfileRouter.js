const { Router } = require('express');
// Instanciar o Router na variável router
// Importar as funções (processamento da requisição) do controller
const { getAllPostsProfile } = require('../controllers/postProfileController');
const router = Router();

router.get('/post/profile/:userID', getAllPostsProfile);

module.exports = router;