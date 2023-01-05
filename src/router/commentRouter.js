const Router = require('koa-router');
const { verifyAuth, verifyPermission } = require('../middleware/authMiddleware');
const { create, commentDetail, commentList, update, deleteComment, addLabels, fileInfo } = require('../controller/commentController');

const { isLabelExists } = require('../middleware/labelMiddleware');
const commentRouter = new Router({ prefix: '/comment' });

// 创建评论接口
commentRouter.post('/', verifyAuth, create);

// 查询评论接口
commentRouter.get('/:commentId', commentDetail);

// 查询评论列表
commentRouter.get('/', commentList);

// 修改评论接口
  // 1、用户必须登录 2、用户必须具备权限
commentRouter.patch('/:commentId', verifyAuth, verifyPermission, update);

// 删除评论接口
commentRouter.delete('/:commentId', verifyAuth, verifyPermission, deleteComment);

// 给评论增加标签接口
commentRouter.post('/:commentId/labels', verifyAuth, verifyPermission, isLabelExists, addLabels);

// 评论图片读取接口
commentRouter.get('/images/:filename', fileInfo);

module.exports = commentRouter;