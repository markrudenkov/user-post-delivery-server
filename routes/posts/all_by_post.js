const data = require('../../test_posts.json');

module.exports = function (req, res) {
    const posts = data;
    res.json({message: 'Posts achieved by POST!', posts});
};
