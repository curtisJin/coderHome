const Router = require('koa-router');

const { avatarHander, pictureHandler, pictureResize } = require('../middleware/fileMiddleware');
const { verifyAuth } = require('../middleware/authMiddleware');

const { fileAvatarInfo, uploadPictureInfo } = require('../controller/fileController');

const fileRouter = new Router({ prefix: '/upload' });

// 上传头像接口
fileRouter.post('/avatar', verifyAuth, avatarHander, fileAvatarInfo);

// 上传图片数据接口
fileRouter.post('/picture', verifyAuth, pictureHandler, pictureResize, uploadPictureInfo)

module.exports = fileRouter;