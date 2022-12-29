const errorTypes = require('../constant/errorType');

// 统一的错误处理文件
const errorHandler = (error, ctx) => {
  let message, status;
  console.log('error' ,error.message);
  switch (error.message) {
    case errorTypes.NAME_OR_PASSWORD_IS_REQUIRED:
      status = 400; // Bad request
      message = '用户名或密码不正确，请检查后重试';
      break;
    case errorTypes.USER_NAME_EXISTS:
      status = 409; // Conflict
      message = '该用户名已经存在，换一个后重试';
      break;
    case errorTypes.USER_NAME_NOT_EXISTS:
      status = 400;
      message = '用户名不存在，请检查后重试';
      break;
    case errorTypes.PASSWORD_ERROR:
      status = 400;
      message = '用户密码错误';
      break;
    case errorTypes.UNAUTHORIZE:
      status = 401;
      message = '授权未通过, token过期';
      break;
    default:
      status = 404;
      message = '404 NOT FOUND';
  }

  ctx.status = status;
  ctx.body = message;
}

module.exports = errorHandler;