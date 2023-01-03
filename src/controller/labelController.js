const { create, labelList } = require('../service/labelService');

class LabelController {
  async create(ctx, next) {
    const { name } = ctx.request.body;
    const res = await create(name);
    ctx.body = res;
  }

  async labelList(ctx, next) {
    const { limit, offset } = ctx.query;
    const res = await labelList(limit, offset);
    ctx.body = res;
  }
}

module.exports = new LabelController();