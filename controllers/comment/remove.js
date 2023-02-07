const { error, initializeFirestore } = require('../../functions');

module.exports = async (req, res) => {
  const { id } = req.params;
  const { username } = req.user;
  if (!id || !username) {
    throw error(404, 'Missing required params');
  }

  const db = initializeFirestore();
  const commentsRef = db.collection('comments').doc(id);
  const doc = await commentsRef.get();
  if (!doc.exists) {
    throw error(404, 'Comment not found');
  }
  const data = doc.data();
  if (data.author !== username) {
    throw error(400, 'Not allowed to remove comment');
  }

  await commentsRef.delete();

  return res.status(200).json({ data, message: 'Comment removed' });
};
