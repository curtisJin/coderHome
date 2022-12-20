const errorTypes = require('../constant/errorType');

// 统一的错误处理文件
const errorHandler = (error, ctx) => {
  let message, status;
  
  switch (error.message) {
    case errorTypes.NAME_OR_PASSWORD_IS_REQUIRED:
      status = 400;
      message = '用户名或密码不正确，请检查后重试';
      break;
  
    default:
      status = 404;
      message = '404 NOT FOUND';
  }

  ctx.status = status;
  ctx.body = message;
}

module.exports = errorHandler;