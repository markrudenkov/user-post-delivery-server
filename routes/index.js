const routes = require('express').Router();
const posts = require('./posts');
const comments = require('./comments');

routes.use('/posts', posts);
routes.use('/comments', comments);

routes.get('/', (req, res) => {
    res.status(200).json({ message: 'Connected!' });
});

module.exports = routes;


