const { create, reply } = require('../service/subCommentService');

class SubCommentController {
  async create(ctx, next) {
    const { content, parentCommentId } = ctx.request.body;
    const { id } = ctx.user;
    const result = await create(parentCommentId, content, id);
    ctx.body = result;
  }

  async reply(ctx, next) {
    const { content, parentCommentId, childCommentId } = ctx.request.body;
    const { id } = ctx.user;
    const result = await reply(parentCommentId, content, id, childCommentId);
    ctx.body = result;
  }
}

module.exports = new SubCommentController();