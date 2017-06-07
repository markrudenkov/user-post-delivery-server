const routes = require('express').Router();
const posts = require('./posts');

routes.use('/posts', posts);

module.exports = routes;


