const { create }  = require('../service/commentService');

class CommentController {
  create = async (ctx, next) => {
    // 1、获取 user_id、 content
    const userId = ctx?.user?.id;
    const content = ctx?.request?.body?.content;
    // 2、将数据插入到数据库
    const result = await create(userId, content);
    ctx.body = result;
  }
}

module.exports = new CommentController();