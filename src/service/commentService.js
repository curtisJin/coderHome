// 根据请求数据操作数据库
const connection = require('../app/dataBase');

class CommentService {
  async create(userId, content) {
    const statement = `INSERT INTO comment (content, user_id) VALUES (?, ?);`;
    const result = await connection.execute(statement, [content, userId]);
    return result[0];
  }

  async getCommentById(id) {
    const statement = `SELECT c.id id, c.content content, c.createAt createTime, c.updateAt updateTime, JSON_OBJECT('id', u.id, 'name', u.name) userInfo 
    FROM comment c LEFT JOIN users u ON c.user_id = u.id WHERE c.id = ?;`;
    const result = await connection.execute(statement, [id]);
    return result[0];
  }
}

module.exports = new CommentService();