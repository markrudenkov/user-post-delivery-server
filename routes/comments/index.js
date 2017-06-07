const comments = require('express').Router();
const comments_by_id = require('./comments_by_id');
const all_coments = require('./all_comments');

comments.get('/:postId', comments_by_id);
comments.get('/', all_coments);


module.exports = comments;