const data = require('../../coments_data.json');
const logger = require('../../custom_logger');

module.exports = function (req, res,next) {
    const comments = data;
    res.json({message: 'Comments achieved by GET!', comments});
    next(logger('Comments fetchet by get method'));
};