const comments = require('../../coments_data.json');
const logger = require('../../custom_logger');

function getTargetComents(comment,postId){
        if(comment.postId == postId){
           return comment;
        }
}

module.exports = function (req, res,next) {
    const postId = req.params.postId * 1;
    const target_comennts = comments.filter(comment => getTargetComents(comment,postId));
    res.json(target_comennts);
    next(logger('Coment fetchet by get method'));
};