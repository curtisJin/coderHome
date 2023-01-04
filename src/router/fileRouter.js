const Router = require('koa-router');

const { avatarHander } = require('../middleware/fileMiddleware');
const { verifyAuth } = require('../middleware/authMiddleware');


const fileRouter = new Router({ prefix: '/upload' });

// 上传头像接口
fileRouter.post('/avatar', verifyAuth, avatarHander)

module.exports = fileRouter;