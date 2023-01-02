const Router = require('koa-router');
const { verifyAuth } = require('../middleware/authMiddleware');
const { create, reply } = require('../controller/subCommentController');

const subCommentRouter = new Router({ prefix: '/subcomment'});

// 创建子评论
subCommentRouter.post('/', verifyAuth, create);

// 回复子评论
subCommentRouter.post('/reply', verifyAuth, reply);

module.exports = subCommentRouter;