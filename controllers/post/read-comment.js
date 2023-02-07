const { error, initializeFirestore } = require('../../functions');

module.exports = async (req, res) => {
  const { id, commentId } = req.params;
  if (!id) {
    throw error(404, 'Missing required params');
  }

  const db = initializeFirestore();
  const postsRef = db.collection('posts').doc(id);
  const doc = await postsRef.get();
  if (!doc.exists) {
    throw error(404, 'Post not found');
  }
  const { comments } = doc.data();
  const comment = comments.find((comment) => comment.id === commentId);
  if (!comment) {
    throw error(404, 'Comment not found');
  }

  return res.status(200).json(comment);
};
