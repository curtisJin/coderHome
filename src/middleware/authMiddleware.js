const errorType = require('../constant/errorType');
const { getUserByName } = require('../service/userService');
const { encryptUseMD5 } = require('../utils/passwordEncrypt');

const verifyLogin = async (ctx, next) => {
	// 1、获取用户名和密码
	const { name, password } = ctx.request.body;

	// 2、判断用户名和密码是否为空
	if (!name || !password) {
		const error = new Error(errorType.NAME_OR_PASSWORD_IS_REQUIRED);
		return ctx.app.emit("error", error, ctx);
	}

	// 3、判断用户名是否已被注册
	const result = await getUserByName(name);
  const user = result[0];
  console.log('r', user);
	if (!user) {
		const error = new Error(errorType.USER_NAME_NOT_EXISTS);
		return ctx.app.emit("error", error, ctx);
	}

	// 4、判断密码是否正确（加密后的）
  if (encryptUseMD5(password) !== user?.password) {
    const error = new Error(errorType.PASSWORD_ERROR);
    return ctx.app.emit("error", error, ctx);
  }

	await next();
};

module.exports = {
  verifyLogin
}
