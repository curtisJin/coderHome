const jwt = require('jsonwebtoken');
const { PRIVATE_KEY } = require('../app/config');
class LoginController {
  async login (ctx, next) {
    const { name, id } = ctx.user;
    
    const token = jwt.sign({ id, name }, PRIVATE_KEY, {
      expiresIn: 60 * 60 * 24, // 过期时间
      algorithm: 'RS256', // 编码方式
    })
    ctx.body = {
      name,
      id,
      token,
    };
    await next();
  };

  async success (ctx, next) {
    ctx.body = '授权验证成功！';
    await next();
  }
}


module.exports = new LoginController();