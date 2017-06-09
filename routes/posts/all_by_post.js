const fs = require('fs');
const logger = require('../../custom_logger');
const posts_data = 'data_storage/posts_data.txt';
const test_posts_data = 'data_storage/test_posts.txt';


function putPost(body){
    let posts = JSON.parse(fs.readFileSync(test_posts_data));
    posts.push(body);
    let file = fs.createWriteStream(test_posts_data);
    file.write(JSON.stringify(posts));
    file.end();
    return posts;
}


module.exports = function (req, res,next) {
    res.json(putPost(req.body));
    next(logger('posts fetchet by get method'));
};
