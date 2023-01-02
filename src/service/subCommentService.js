// 子评论数据库操作

const connection = require('../app/dataBase');

class SubCommentService {
  async create(parentCommentId, content, userId) {
    const statement = `INSERT INTO subComment (content, parent_comment_id, user_id) VALUES (?, ?, ?)`;
    const result = await connection.execute(statement, [content, parentCommentId, userId]);
    return result[0];
  }

  async reply(parentCommentId, content, userId, childCommentId) {
    const statement = `INSERT INTO subComment (content, parent_comment_id, user_id, child_comment_id) VALUES (?, ?, ?, ?);`;
    const result = await connection.execute(statement, [content, parentCommentId, userId, childCommentId]);
    return result[0];
  }

  async update(subCommentId, content) {
    const statement = `UPDATE subComment SET content = ? WHERE id = ?;`;
    const result = await connection.execute(statement, [content, subCommentId]);
    return result[0];
  }

  async remove(subCommentId) {
    const statement = `DELETE FROM subComment WHERE id = ?;`;
    const result = await connection.execute(statement, [subCommentId]);
    return result[0];
  }
}

module.exports = new SubCommentService();