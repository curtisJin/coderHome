const Router = require('koa-router');
const { create } = require('../controller/userController');
const { verifyUser } = require('../middleware/userMiddleware');

const userRouter = new Router({ prefix: '/users' });



userRouter.post('/', verifyUser, create);

module.exports  = userRouter;