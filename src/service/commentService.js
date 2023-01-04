// 根据请求数据操作数据库
const connection = require('../app/dataBase');

class CommentService {
  async create(userId, content) {
    const statement = `INSERT INTO comment (content, user_id) VALUES (?, ?);`;
    const result = await connection.execute(statement, [content, userId]);
    return result[0];
  }

  async getCommentById(id) {
    const statement = `SELECT c.id id, c.content content, c.createAt createTime, c.updateAt updateTime, JSON_OBJECT('id', u.id, 'name', u.name) userInfo, 
    IF(COUNT(l.id), JSON_ARRAYAGG(JSON_OBJECT('id', l.id, 'name', l.name)), NULL) labels,
    (SELECT IF(COUNT(sc.id), JSON_ARRAYAGG(JSON_OBJECT('id', sc.id, 'content', sc.content,
    'user', JSON_OBJECT('id', cu.id, 'name', cu.name)
  )), NULL) FROM subComment sc LEFT JOIN users cu ON sc.user_id = cu.id WHERE c.id = sc.parent_comment_id) subComments 
    FROM comment c 
    LEFT JOIN users u ON c.user_id = u.id 
    LEFT JOIN comment_label cl ON c.id = cl.comment_id
    LEFT JOIN label l ON cl.label_id = l.id 
    WHERE c.id = ? 
    GROUP BY c.id;`;
    const result = await connection.execute(statement, [id]);
    return result[0];
  }

  async getCommentList(offset, size) {
    // 包含了子查询的列表查询
    const statement = `SELECT c.id id, c.content content, c.createAt createTime, c.updateAt updateTime, JSON_OBJECT('id', u.id, 'name', u.name) userInfo,
    (SELECT COUNT(*) FROM subComment sc WHERE sc.parent_comment_id = c.id) subCommentCount, 
    (SELECT COUNT(*) FROM comment_label cl WHERE cl.comment_id = c.id) labelCount 
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

  async hasLabelCheck(commentId, labelId) {
    const statement = `SELECT * FROM comment_label WHERE comment_id = ? AND label_id = ?;`;
    const result = await connection.execute(statement, [commentId, labelId]);

    return result[0].length > 0
  }
  async addLabels(commentId, labelId) {
    const statement = `INSERT INTO comment_label (comment_id, label_id) VALUES (?, ?);`;
    const result = await connection.execute(statement, [commentId, labelId]);
    return result[0];
  }
}

module.exports = new CommentService();