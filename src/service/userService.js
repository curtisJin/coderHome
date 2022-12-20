// 根据请求数据操作数据库
const connection = require('../app/dataBase');

class UserService {
  async create(user) {
    const { name, password } = user;
    const statement = `INSERT INTO users (name, password) VALUES (?, ?);`;
    const result = await connection.execute(statement, [name, password]); // 将用户信息插入到数据表users中
    return result;
  }
}

module.exports = new UserService();