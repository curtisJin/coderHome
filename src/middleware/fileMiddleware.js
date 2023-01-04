const Multer = require('koa-multer');
// 头像数据上传处理
const avatarUpload = Multer({
  dest: './uploads/avatar',
});

const avatarHander = avatarUpload.single('avatar');

module.exports = {
  avatarHander,
}