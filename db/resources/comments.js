const { randomDate, randomUsername } = require('../../functions');
const chance = require('../../lib/chance');

module.exports = async () => {
  return [
    {
      author: randomUsername(),
      content: chance.sentence({ words: 10 }),
      date: randomDate(),
    },
    {
      author: randomUsername(),
      content: chance.sentence({ words: 10 }),
      date: randomDate(),
    },
    {
      author: randomUsername(),
      content: chance.sentence({ words: 10 }),
      date: randomDate(),
    },
  ];
};
