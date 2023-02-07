const chance = require('../../lib/chance');
const { hashSync } = require('bcryptjs');
const { randomUsername } = require('../../functions');

module.exports = async () => {
  const roles = ['admin', 'client'];

  return [
    {
      email: 'ioana@email.com',
      name: 'Ioana Colceag',
      password: hashSync('merlin2016'),
      role: 'admin',
      username: 'ioanacolceag',
    },
    {
      email: chance.email(),
      name: chance.name(),
      password: hashSync('merlin2016'),
      role: chance.pickone(roles),
      username: randomUsername(),
    },
    {
      email: chance.email(),
      name: chance.name(),
      password: hashSync('merlin2016'),
      role: chance.pickone(roles),
      username: randomUsername(),
    },
  ];
};
