const fs = require('fs');
const { AVATAR_PATH } = require('../constant/filePath'); 
const { create, getAvatarByUserId } = require('../service/userService')

class UserController {
  async create(ctx, next) {
    // 获取用户请求传递参数
    const userInfo = ctx.request.body;
    // 查询数据
    const res = await create(userInfo);
    // 返回数据
    ctx.body = res;
  }

  async avatarInfo(ctx, next) {
    const { userId } = ctx?.params;
    const res = await getAvatarByUserId(userId);

    ctx.response.set('content-type', res[0]?.mimetype);
    ctx.body = fs.createReadStream(`${AVATAR_PATH}/${res[0]?.filename}`);
  }
}


module.exports = new UserController();