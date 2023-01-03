const { create } = require('../service/labelService');

class LabelController {
  async create(ctx, next) {
    const { name } = ctx.request.body;
    const res = await create(name);
    ctx.body = res;
  }
}

module.exports = new LabelController();