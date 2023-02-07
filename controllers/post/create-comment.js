const { error, initializeFirestore, toDateString } = require('../../functions');

module.exports = async (req, res) => {
  const { content } = req.body;
  const { id } = req.params;
  const { username } = req.user;
  if (!content || !id || !username) {
    throw error(404, 'Missing required params');
  }

  const db = initializeFirestore();
  const postsRef = db.collection('posts').doc(id);
  const doc = await postsRef.get();
  if (!doc.exists) {
    throw error(404, 'Post not found');
  }
  const data = doc.data();

  const comment = {
    author: username,
    content,
    date: toDateString(new Date()),
  };

  const commentsRef = db.collection('comments');
  const response = await commentsRef.add(comment);
  if (!response.id) {
    throw error(500, 'Failed to create comment');
  }

  comment.id = response.id;
  data.comments.push(comment);
  await postsRef.update(data);

  return res.status(200).json(data);
};
