const {
  initializeFirestore,
  randomDate,
  randomUsername,
} = require('../../functions');
const chance = require('../../lib/chance');

module.exports = async () => {
  const db = initializeFirestore();
  const comments = await db.collection('comments').get();
  const commentsData = comments.docs.map((comment) => {
    const data = comment.data();
    data.id = comment.id;
    return data;
  });

  return [
    {
      author: randomUsername(),
      comments: [commentsData[0]],
      content: chance.paragraph({ sentences: 10 }),
      date: randomDate(),
      title: chance.sentence({ words: 4 }),
    },
    {
      author: randomUsername(),
      comments: [commentsData[1]],
      content: chance.paragraph({ sentences: 10 }),
      date: randomDate(),
      title: chance.sentence({ words: 4 }),
    },
    {
      author: randomUsername(),
      comments: [commentsData[2]],
      content: chance.paragraph({ sentences: 10 }),
      date: randomDate(),
      title: chance.sentence({ words: 4 }),
    },
  ];
};
