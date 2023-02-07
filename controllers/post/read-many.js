const { initializeFirestore } = require('../../functions');

module.exports = async (req, res) => {
  const db = initializeFirestore();
  const postsRef = db.collection('posts');
  const snapshot = await postsRef.get();
  const data = snapshot.docs.map((doc) => {
    const post = doc.data();
    post.id = doc.id;
    return post;
  });

  return res.status(200).json(data);
};
