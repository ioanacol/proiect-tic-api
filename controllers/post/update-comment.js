const { error, initializeFirestore, toDateString } = require('../../functions');

module.exports = async (req, res) => {
  const { id, commentId } = req.params;
  const { username } = req.user;
  if (!id || !commentId || !username) {
    throw error(404, 'Missing required params');
  }

  const db = initializeFirestore();
  const postsRef = db.collection('posts').doc(id);
  let doc = await postsRef.get();
  if (!doc.exists) {
    throw error(404, 'Post not found');
  }
  const post = doc.data();
  const { comments } = post;
  const comment = comments.find((comment) => comment.id === commentId);
  const commentsRef = db.collection('comments').doc(commentId);
  doc = await commentsRef.get();
  if (!comment || !doc.exists) {
    throw error(404, 'Comment not found');
  }
  if (comment.author !== username || doc.data().author !== username) {
    throw error(400, 'Not allowed to update comment');
  }

  comment.date = toDateString(new Date());
  const { content } = req.body;
  if (content) {
    comment.content = content;
  }

  await commentsRef.update(comment);
  await postsRef.update(post);

  return res.status(200).json({ data: post, message: 'Comment updated' });
};
