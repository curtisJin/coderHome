const Multer = require('koa-multer');
const path = require('path');
const Jimp = require('jimp');

const { AVATAR_PATH, PICTURE_PATH } = require('../constant/filePath');

// 头像数据上传处理
const avatarUpload = Multer({
  dest: AVATAR_PATH,
});

const avatarHander = avatarUpload.single('avatar');

// 图片数据上传处理
const pictureUpload = Multer({
  dest: PICTURE_PATH
});

const pictureHandler = pictureUpload.array('picture', 9);

// 图像裁剪处理
const pictureResize = async (ctx, next) => {
  const files = ctx.req.files;

  for (let file of files) {
    const destPath = path.join(file.destination, file.filename);
    Jimp.read(file.path).then( image => {
      image.resize(1280, Jimp.AUTO).write(`${destPath}-large`);
      image.resize(640, Jimp.AUTO).write(`${destPath}-normal`);
      image.resize(320, Jimp.AUTO).write(`${destPath}-small`);
    })
  }

  await next();
}

module.exports = {
  avatarHander,
  pictureHandler,
  pictureResize
}