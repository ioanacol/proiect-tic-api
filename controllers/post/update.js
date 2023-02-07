const { error, initializeFirestore, toDateString } = require('../../functions');

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
  const payload = {
    date: toDateString(new Date()),
  };
  const { content, title } = req.body;
  if (content) {
    payload.content = content;
  }
  if (title) {
    payload.title = title;
  }

  await postsRef.update(payload);
  const data = (await postsRef.get()).data();

  return res.status(200).json({ data, message: 'Post updated' });
};
