const Router = require('koa-router');
const { create } = require('../controller/userController');

const userRouter = new Router({ prefix: '/users' });



userRouter.post('/', create);

module.exports  = userRouter;