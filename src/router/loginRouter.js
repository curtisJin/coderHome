const Router = require('koa-router');
const { login } = require('../controller/loginController');
const loginRouter = new Router({ prefix: '/login' });

loginRouter.post('/', login);

module.exports = loginRouter;