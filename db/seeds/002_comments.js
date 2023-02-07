/* eslint-disable no-console */
const { initializeFirestore } = require('../../functions');
const comments = require('../resources/comments');

exports.seed = async () => {
  try {
    console.log('Planting seeds for comments');

    const seeds = await comments();
    const db = initializeFirestore();
    for (const seed of seeds) {
      await db.collection('comments').add(seed);
    }

    console.log('✓');
  } catch (err) {
    console.warn('Error! Cannot add comments');
    console.error(err);
  }
};
