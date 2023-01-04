const Multer = require('koa-multer');

const { AVATAR_PATH } = require('../constant/filePath');

// 头像数据上传处理
const avatarUpload = Multer({
  dest: AVATAR_PATH,
});

const avatarHander = avatarUpload.single('avatar');

module.exports = {
  avatarHander,
}