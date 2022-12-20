const service = require('../service/userService')

class UserController {
  async create(ctx, next) {
    // 获取用户请求传递参数
    const userInfo = ctx.request.body;
    // 查询数据
    const res = await service.create(userInfo);
    // 返回数据
    ctx.body = res;
  }
}


module.exports = new UserController();