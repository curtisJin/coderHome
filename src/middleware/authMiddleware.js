const jwt = require('jsonwebtoken');
const { PUBLIC_KEY } = require('../app/config');

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
	if (!user) {
		const error = new Error(errorType.USER_NAME_NOT_EXISTS);
		return ctx.app.emit("error", error, ctx);
	}

	// 4、判断密码是否正确（加密后的）
  if (encryptUseMD5(password) !== user?.password) {
    const error = new Error(errorType.PASSWORD_ERROR);
    return ctx.app.emit("error", error, ctx);
  }
	ctx.user = user;
	await next();
};

const verifyAuth = async (ctx, next) => {
	console.log('验证授权中间件');
	// 1、获取token
	const authorization = ctx.headers.authorization;
	if (!authorization) {
		const error = new Error(errorType.UNAUTHORIZE);
		return ctx.app.emit('error', error, ctx);
	}
	const token = authorization.replace('Bearer ', '');

	// 2、验证token
	try {
		const result = jwt.verify(token, PUBLIC_KEY, {
			algorithms: ['RS256'],
		});
		ctx.user = result;
		await next();
	} catch (e) {
		const error = new Error(errorType.UNAUTHORIZE);
		ctx.app.emit('error', error, ctx);
	}
}

module.exports = {
  verifyLogin,
	verifyAuth
}
