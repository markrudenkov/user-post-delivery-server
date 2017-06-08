const data = require('../../coments_data.json');
const logger = require('../../custom_logger');

function findAllComments (postId,comments){
    var target_comments = [];
    for(var i = 0; i < comments.length; i++){
        if(comments[i].postId == postId){
            target_comments.push(comments[i]);
        }
    }
    return target_comments;
}

module.exports = function (req, res,next) {
    const postId = req.params.postId * 1;
    const target_comennts = findAllComments(postId,data);

    res.json(target_comennts);
    next(logger('Coment fetchet by get method'));
};