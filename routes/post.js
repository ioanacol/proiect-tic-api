const { Post } = require('../controllers');
const { Router } = require('express');

const router = Router();

router.delete('/admin/posts/:id', Post.remove);
router.get('/posts', Post.readMany);
router.get('/posts/:id', Post.readOne);
router.post('/admin/posts', Post.create);
router.put('/admin/posts/:id', Post.update);

router.delete('/admin/posts/:id/comments/:commentId', Post.removeComment);
router.get('/posts/:id/comments', Post.readComments);
router.get('/posts/:id/comments/:commentId', Post.readComment);
router.post('/admin/posts/:id/comments', Post.createComment);
router.put('/admin/posts/:id/comments/:commentId', Post.updateComment);

module.exports = router;
