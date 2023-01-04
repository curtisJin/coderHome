// 根据请求数据操作数据库
const connection = require('../app/dataBase');

class UserService {
  async create(user) {
    const { name, password } = user;
    const statement = `INSERT INTO users (name, password) VALUES (?, ?);`;
    const result = await connection.execute(statement, [name, password]); // 将用户信息插入到数据表users中
    return result[0];
  };

  async getUserByName(name) { // 根据用户名查询是否存在于数据表里
    const statement = `SELECT * FROM users WHERE name = ?;`;
    const result  = await connection.execute(statement, [name]);
    return result[0];
  }

  async getAvatarByUserId(userId) {
    const statement = `SELECT * FROM avatar WHERE user_id = ?;`;
    const result = await connection.execute(statement, [userId]);
    return result[0];
  }
}

module.exports = new UserService();