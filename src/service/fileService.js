const connection = require('../app/dataBase');

class FileService {
  async createAvatar(filename, mimetype, size, userId) {
    const statement = `INSERT INTO avatar (filename, mimetype, size, user_id) VALUES (?, ?, ?, ?);`;
    const result = await connection.execute(statement, [filename, mimetype, size, userId]);
    return result[0];
  }

  async updateAvatarUrlById(url, id) {
    const statement = `UPDATE users SET avatar_url = ? WHERE id = ?;`;
    const result = await connection.execute(statement, [url, id]);
    return result[0]
  }

  async createFile(filename, mimetype, size, id, commentId) {
    const statement = `INSERT INTO file (filename, mimetype, size, user_id, comment_id) VALUES (?, ?, ?, ?, ?);`;
    const result = await connection.execute(statement, [filename, mimetype, size, id, commentId]);
    return result[0];
  }
}

module.exports = new FileService();