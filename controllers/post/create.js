const { error, initializeFirestore, toDateString } = require('../../functions');

module.exports = async (req, res) => {
  const { content, title } = req.body;
  const { username } = req.user;
  if (!content || !title || !username) {
    throw error(404, 'Missing required params');
  }

  const payload = {
    author: username,
    comments: [],
    content,
    date: toDateString(new Date()),
    title,
  };

  const db = initializeFirestore();
  const postsRef = db.collection('posts');
  const response = await postsRef.add(payload);
  if (!response.id) {
    throw error(500, 'Failed to create post');
  }

  const data = (await response.get()).data();
  data.id = response.id;

  return res.status(200).json({ data, message: 'Post created' });
};
