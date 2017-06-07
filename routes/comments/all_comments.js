const data = require('../../coments_data.json');

module.exports = function (req, res) {
    const comments = data;
    res.json({message: 'Comments achieved by GET!', comments});
};