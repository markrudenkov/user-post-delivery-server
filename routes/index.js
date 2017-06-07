const routes = require('express').Router();
const posts = require('./posts');

routes.use('/posts', posts);

routes.get('/', (req, res) => {
    res.status(200).json({ message: 'Connected!' });
});

module.exports = routes;


