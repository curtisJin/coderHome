const Router = require('koa-router');
const { verifyAuth } = require('../middleware/authMiddleware');
const { create } = require('../controller/subCommentController');

const subCommentRouter = new Router({ prefix: '/subcomment'});

// 创建子评论
subCommentRouter.post('/', verifyAuth, create);

module.exports = subCommentRouter;