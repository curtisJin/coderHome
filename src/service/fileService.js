const connection = require('../app/dataBase');

class FileService {
  async createAvatar(filename, mimetype, size, userId) {
    const statement = `INSERT INTO avatar (filename, mimetype, size, user_id) VALUES (?, ?, ?, ?);`;
    const result = await connection.execute(statement, [filename, mimetype, size, userId]);
    return result[0];
  }
}

module.exports = new FileService();