const Router = require('koa-router');
const { verifyAuth, verifyPermission } = require('../middleware/authMiddleware');
const { create, reply, update, remove } = require('../controller/subCommentController');

const subCommentRouter = new Router({ prefix: '/subcomment'});

// 创建子评论
subCommentRouter.post('/', verifyAuth, create);

// 回复子评论
subCommentRouter.post('/reply', verifyAuth, reply);

// 修改评论
subCommentRouter.patch('/:subCommentId', verifyAuth, verifyPermission, update);
// 删除评论
subCommentRouter.delete('/:subCommentId', verifyAuth, verifyPermission, remove);

module.exports = subCommentRouter;