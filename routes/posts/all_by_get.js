const data = require('../../posts_data.json');

module.exports = function (req, res) {
    const posts = data;
    res.json({message: 'Posts achieved by GET!', posts});
};