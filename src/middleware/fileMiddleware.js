const Multer = require('koa-multer');

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

module.exports = {
  avatarHander,
  pictureHandler
}