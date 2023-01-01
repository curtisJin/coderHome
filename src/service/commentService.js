// 根据请求数据操作数据库
const connection = require('../app/dataBase');

class CommentService {
  async create (userId, content) {
    const statement = `INSERT INTO comment (content, user_id) VALUES (?, ?);`;
    const result = await connection.execute(statement, [content, userId]);
    return result;
  }
}

module.exports = new CommentService();