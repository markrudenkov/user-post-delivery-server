const fs = require('fs');
const logger = require('../../custom_logger');
const posts_data = 'data_storage/posts_data.txt';
const test_posts_data = 'data_storage/test_posts.txt';
const test_posts_data2 = 'data_storage/test_posts2.txt';

function updatePosts(posts) {
    let file = fs.createWriteStream(test_posts_data2);
    file.write(JSON.stringify(posts));
    file.end();
    return posts;
}

function updateTargetPosts(originalPost, index, arr, updatedPost) {
    if (originalPost.id === updatedPost.id) {
        arr[index] = updatedPost;
    }
}

module.exports = function (req, res, next) {
    const updatedPost = req.body;
    let posts = JSON.parse(fs.readFileSync(test_posts_data));
    posts.forEach((post, index, arr) => updateTargetPosts(post, index, arr, updatedPost));
    res.json(updatePosts(posts));
    next(logger('Coment fetchet by get method'));
};