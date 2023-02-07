const { error, initializeFirestore } = require('../../functions');

module.exports = async (req, res) => {
  const { id } = req.params;
  const { username } = req.user;
  if (!id || !username) {
    throw error(404, 'Missing required params');
  }

  const db = initializeFirestore();
  const postsRef = db.collection('posts').doc(id);
  const doc = await postsRef.get();
  if (!doc.exists) {
    throw error(404, 'Post not found');
  }
  const data = doc.data();
  // if (data.author !== username) {
  //   throw error(400, 'Not allowed to remove post');
  // }

  await postsRef.delete();

  return res.status(200).json({ data, message: 'Post removed' });
};
