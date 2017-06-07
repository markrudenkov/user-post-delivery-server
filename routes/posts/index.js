const posts = require('express').Router();
const all_get = require('./all_by_get');
const all_post = require('./all_by_post');

posts.get('/', all_get);
posts.post('/', all_post);

module.exports = posts;