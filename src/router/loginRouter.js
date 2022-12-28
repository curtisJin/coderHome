const Router = require('koa-router');
const { login } = require('../controller/loginController');
const { verifyLogin } = require('../middleware/authMiddleware'); // 登录校验中间件

const loginRouter = new Router({ prefix: '/login' });

loginRouter.post('/', verifyLogin,  login);

module.exports = loginRouter;