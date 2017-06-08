const data = require('../../test_posts.json');
const logger = require('../../custom_logger');

module.exports = function (req, res,next) {
    const posts = data;
    res.json({message: 'Posts achieved by POST!', posts});
    next(logger('posts fetchet by get method'));
};
