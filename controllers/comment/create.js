const { error, initializeFirestore, toDateString } = require('../../functions');

module.exports = async (req, res) => {
  const { content } = req.body;
  const { username } = req.user;
  if (!content || !username) {
    throw error(404, 'Missing required params');
  }

  const payload = {
    author: username,
    content,
    date: toDateString(new Date()),
  };

  const db = initializeFirestore();
  const commentsRef = db.collection('comments');
  const response = await commentsRef.add(payload);
  if (!response.id) {
    throw error(500, 'Failed to create comment');
  }
  const data = (await response.get()).data();
  data.id = response.id;

  return res.status(200).json({ data, message: 'Comment created' });
};
