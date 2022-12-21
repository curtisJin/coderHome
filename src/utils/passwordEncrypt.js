// 密码加密处理函数
const crypto = require('crypto');

const encryptUseMD5 = (password) => {
  const md5 = crypto.createHash('md5');
  return md5.update(password).digest('hex');
}

module.exports = {
  encryptUseMD5,
}