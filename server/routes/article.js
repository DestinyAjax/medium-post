const articlecontroller = require('../controllers/article.ctrl');
const express = require('express');
const router = express.Router();

router.route('/articles').get(articlecontroller.getAll);
router.route('/article').post(articlecontroller.addArticle);
router.route('/article/clap').post(articlecontroller.clapArticle);
router.route('/article/comment').post(articlecontroller.commentArticle);
router.route('/article/:id').get(articlecontroller.getArticle);

module.exports = router;