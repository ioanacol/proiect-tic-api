const chance = require('../lib/chance');
const toDateString = require('./to-date-string');

const randomDate = () => {
  return toDateString(
    chance.date({
      string: false,
      american: false,
      min: new Date('2022-01-01'),
      max: new Date('2023-02-05'),
    })
  );
};

module.exports = randomDate;
