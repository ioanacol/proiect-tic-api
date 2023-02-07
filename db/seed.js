const identities = require('./seeds/001_identities');
const comments = require('./seeds/002_comments');
const posts = require('./seeds/003_posts');

const seed = async () => {
  await identities.seed();
  await comments.seed();
  await posts.seed();
};

(async () => {
  try {
    await seed();
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();

module.exports = seed;
