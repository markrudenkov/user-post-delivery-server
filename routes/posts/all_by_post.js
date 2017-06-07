const data = require('../../test_posts.json');

module.exports = function (req, res) {
    const posts = data;

    res.status(200).json({ posts });
};