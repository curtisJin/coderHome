// 子评论数据库操作

const connection = require('../app/dataBase');

class SubCommentService {
  async create(parentCommentId, content, userId) {
    const statement = `INSERT INTO subComment (content, parent_comment_id, user_id) VALUES (?, ?, ?)`;
    const result = await connection.execute(statement, [content, parentCommentId, userId]);
    return result[0];
  }
}

module.exports = new SubCommentService();