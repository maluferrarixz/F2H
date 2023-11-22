const { Router } = require('express');
// Instanciar o Router na variável router
// Importar as funções (processamento da requisição) do controller
const { createPost, getAllPosts, getAllPostsStart } = require('../controllers/postController');
const router = Router();


// Responsável por salvar a imagem localmente.
const upload = require('../config/multer');

router.post('/createPost', upload.single('file'), createPost);
router.get('/post/:selectedDanceId/:selectedProblemId', getAllPosts);
router.get('/getAllPostsStart', getAllPostsStart);

module.exports = router;