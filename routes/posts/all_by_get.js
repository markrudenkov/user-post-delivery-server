const data = require('../../posts_data.json');
const logger = require('../../winston_logger');

module.exports = function (req, res,next) {
    const posts = data;
    res.json(posts);
    next(logger.info('posts fetchet by get method'))
};