const { Router } = require('express');
// Instanciar o Router na variável router
// Importar as funções (processamento da requisição) do controller
const { createPost, getAllPosts } = require('../controllers/postController');
const router = Router();


// Responsável por salvar a imagem localmente.
const upload = require('../config/multer');
router.post('/createPost', upload.single('file'), createPost);

router.get('/posts', getAllPosts);
// router.get('/post/commerce', getCommercePost);

module.exports = router;