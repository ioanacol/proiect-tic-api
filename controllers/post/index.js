const create = require('./create');
const readMany = require('./read-many');
const readOne = require('./read-one');
const remove = require('./remove');
const update = require('./update');

const createComment = require('./create-comment');
const readComment = require('./read-comment');
const readComments = require('./read-comments');
const removeComment = require('./remove-comment');
const updateComment = require('./update-comment');

module.exports = {
  create,
  readMany,
  readOne,
  remove,
  update,
  createComment,
  readComment,
  readComments,
  removeComment,
  updateComment,
};
