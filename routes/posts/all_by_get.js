const data = require('../../posts_data.json');
const logger = require('../../custom_logger');

module.exports = function (req, res,next) {
    const posts = data;
    res.json(posts);
    next(logger('posts fetchet by get method'));
};