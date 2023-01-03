const { create, reply, update, remove, getSubcommentsByCommentId } = require('../service/subCommentService');

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

  async update(ctx, next) {
    const { subCommentId } = ctx.params;
    const { content } = ctx.request.body;
    const result = await update(subCommentId, content);
    ctx.body = result;
  }

  async remove(ctx, next) {
    const { subCommentId } = ctx.params;
    const result = await remove(subCommentId);
    ctx.body = result;
  }

  async subCommentList(ctx, next) {
    const { commentId } = ctx.query;
    const result = await getSubcommentsByCommentId(commentId);
    ctx.body = result;
  }
}

module.exports = new SubCommentController();