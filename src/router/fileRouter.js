const Router = require('koa-router');

const { avatarHander } = require('../middleware/fileMiddleware');
const { verifyAuth } = require('../middleware/authMiddleware');

const { fileAvatarInfo } = require('../controller/fileController');

const fileRouter = new Router({ prefix: '/upload' });

// 上传头像接口
fileRouter.post('/avatar', verifyAuth, avatarHander, fileAvatarInfo)

module.exports = fileRouter;