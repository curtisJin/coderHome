const { create, getCommentById }  = require('../service/commentService');

class CommentController {
  async create (ctx, next) {
    // 1、获取 user_id、 content
    const userId = ctx?.user?.id;
    const content = ctx?.request?.body?.content;
    // 2、将数据插入到数据库
    const result = await create(userId, content);
    ctx.body = result;
  }

  async commentDetail (ctx, next) {
    // 1、获取数据commentId
    const commentId = ctx.params.commentId;

    // 2、根据commentId获取评论
    const result = await getCommentById(commentId);
    ctx.body = result;
  }
}

module.exports = new CommentController();