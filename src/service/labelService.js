const connection = require('../app/dataBase');

class LabelService {
  async create(name) {
    const statement = `INSERT INTO label (name) VALUES (?);`;
    const result = await connection.execute(statement, [name]);
    return result[0];
  }
}

module.exports = new LabelService();