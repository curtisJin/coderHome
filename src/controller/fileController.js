const { createAvatar } = require('../service/fileService');

class FileController {
  async fileAvatarInfo(ctx, next) {
    const { filename, mimetype, size } = ctx?.req?.file;
    const { id } = ctx.user;
    
    const res = await createAvatar(filename, mimetype, size, id);
    ctx.body = res;
  }
}

module.exports = new FileController();