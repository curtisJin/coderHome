class CommentController {
  create = async (ctx, next) => {
    ctx.body = '发表动态成功';
  }
}

module.exports = new CommentController();