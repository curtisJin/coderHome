const errorType = require('../constant/errorType');
const { getUserByName } = require('../service/userService');

// 验证用户信息是否合规的中间件
const verifyUser = async function(ctx, next) {
  // 1、获取用户名和密码
  const { name, password } = ctx.request.body;

  // 2、判断用户名或密码是否为空，为空不能通过
  if (!name || !password) {
    const error = new Error(errorType.NAME_OR_PASSWORD_IS_REQUIRED);
    return ctx.app.emit('error', error, ctx);
  }

  // 3、判断用户名是否已被注册
  const result = await getUserByName(name);
  console.log('res', result.length);
  if (result.length) {
    const error = new Error(errorType.USER_NAME_EXISTS);
    return ctx.app.emit('error', error, ctx);
  }
  await next();
}

module.exports = {
  verifyUser,
}