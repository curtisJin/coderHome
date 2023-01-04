const { createAvatar, updateAvatarUrlById, createFile } = require('../service/fileService');
const { APP_HOST, APP_PORT } = require('../app/config');
class FileController {
  async fileAvatarInfo(ctx, next) {
    const { filename, mimetype, size } = ctx?.req?.file;
    const { id } = ctx.user;
    
    const res = await createAvatar(filename, mimetype, size, id);

    // 将图片地址保存到users表中
    await updateAvatarUrlById(`${APP_HOST}:${APP_PORT}/users/${id}/avatar`, id);
    ctx.body = '头像上传成功';
  }

  async uploadPictureInfo(ctx, next) {
    const files = ctx?.req?.files;
    const { id } = ctx?.user;
    const { commentId } = ctx?.query;
    // 2. 将所有的文件信息保存到数据库中
    for(let file of files) {
      const { filename, mimetype, size } = file;
      await createFile(filename, mimetype, size, id, commentId);
    }
    ctx.body = '图片上传成功';
  }
}

module.exports = new FileController();