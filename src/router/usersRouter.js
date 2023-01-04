const Router = require('koa-router');
const { create, avatarInfo } = require('../controller/userController');
const { verifyUser, encryptPassword } = require('../middleware/userMiddleware');

const userRouter = new Router({ prefix: '/users' });



userRouter.post('/', verifyUser, encryptPassword, create);

// 获取用户头像的接口
userRouter.get('/:userId/avatar', avatarInfo);

module.exports  = userRouter;