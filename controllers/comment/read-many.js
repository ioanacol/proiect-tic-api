const { initializeFirestore } = require('../../functions');

module.exports = async (req, res) => {
  const db = initializeFirestore();
  const commentsRef = db.collection('comments');
  const snapshot = await commentsRef.get();
  const data = snapshot.docs.map((doc) => doc.data());

  return res.status(200).json(data);
};
