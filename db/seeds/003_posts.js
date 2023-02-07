/* eslint-disable no-console */
const { initializeFirestore } = require('../../functions');
const posts = require('../resources/posts');

exports.seed = async () => {
  try {
    console.log('Planting seeds for posts');

    const seeds = await posts();
    const db = initializeFirestore();
    for (const seed of seeds) {
      await db.collection('posts').add(seed);
    }

    console.log('✓');
  } catch (err) {
    console.warn('Error! Cannot add posts');
    console.error(err);
  }
};
