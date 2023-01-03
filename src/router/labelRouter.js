const Router = require('koa-router');
const { verifyAuth } = require('../middleware/authMiddleware');
const { create, labelList } = require('../controller/labelController');

const labelRouter = new Router({ prefix: '/label' });

// 创建标签接口
labelRouter.post('/', verifyAuth, create);

// 获取标签列表
labelRouter.get('/', labelList);

module.exports = labelRouter;