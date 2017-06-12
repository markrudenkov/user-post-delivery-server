const posts = require('express').Router();
const all_get = require('./all_by_get');
const add_post = require('./add_post');
const update_post = require('./update_post');

posts.get('/', all_get);
posts.post('/', add_post);
posts.put('/', update_post);

module.exports = posts;