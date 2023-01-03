// 根据请求数据操作数据库
const connection = require('../app/dataBase');

const commonSql = `SELECT c.id id, c.content content, c.createAt createTime, c.updateAt updateTime, JSON_OBJECT('id', u.id, 'name', u.name) userInfo 
FROM comment c LEFT JOIN users u ON c.user_id = u.id `;
class CommentService {
  async create(userId, content) {
    const statement = `INSERT INTO comment (content, user_id) VALUES (?, ?);`;
    const result = await connection.execute(statement, [content, userId]);
    return result[0];
  }

  async getCommentById(id) {
    const statement = commonSql + 'WHERE c.id = ?;';
    const result = await connection.execute(statement, [id]);
    return result[0];
  }

  async getCommentList(offset, size) {
    // 包含了子查询的列表查询
    const statement = `SELECT c.id id, c.content content, c.createAt createTime, c.updateAt updateTime, JSON_OBJECT('id', u.id, 'name', u.name) userInfo,
    (SELECT COUNT(*) FROM subComment sc WHERE sc.parent_comment_id = c.id) subCommentCount 
    FROM comment c LEFT JOIN users u ON c.user_id = u.id LIMIT ?, ?;`;
    const result = await connection.execute(statement, [offset, size]);
    return result[0];
  }

  async updateComment(content, commentId) {
    const statement = `UPDATE comment SET content = ? WHERE id = ?;`;
    const result = await connection.execute(statement, [content, commentId]);
    return result[0];
  }

  async deleteCommentService(commentId) {
    const statement = `DELETE FROM comment WHERE id = ?;`;
    const result = await connection.execute(statement, [commentId]);
    return result[0];
  }
}

module.exports = new CommentService();