const Router = require('koa-router');
const { verifyAuth } = require('../middleware/authMiddleware');
const { create, commentDetail } = require('../controller/commentController');

const commentRouter = new Router({ prefix: '/comment' });

// 创建评论接口
commentRouter.post('/', verifyAuth, create);

// 查询评论接口
commentRouter.get('/:commentId', commentDetail);

module.exports = commentRouter;