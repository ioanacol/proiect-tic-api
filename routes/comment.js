const { Comment } = require('../controllers');
const { Router } = require('express');

const router = Router();

router.delete('/admin/comments/:id', Comment.remove);
router.get('/comments', Comment.readMany);
router.get('/comments/:id', Comment.readOne);
router.post('/admin/comments', Comment.create);
router.put('/admin/comments/:id', Comment.update);

module.exports = router;
