const fs = require('fs');
const logger = require('../../custom_logger');
const posts_data = 'data_storage/posts_data.txt';
const test_posts_data2 = 'data_storage/test_posts2.txt';
const test_posts_data = 'data_storage/test_posts.txt';


module.exports = function (req, res,next) {
    res.json(JSON.parse(fs.readFileSync(test_posts_data)));
    next(logger('posts fetchet by get method'));
};


