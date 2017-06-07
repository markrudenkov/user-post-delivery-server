const data = require('../../posts_data.json');

module.exports = function (req, res) {
    const posts = data;

    res.status(200).json({ posts });
};