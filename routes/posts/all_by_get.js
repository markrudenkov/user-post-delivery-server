const data = require('../../posts_data.json');

module.exports = function (req, res) {
    const posts = data;
    res.json(posts);
};