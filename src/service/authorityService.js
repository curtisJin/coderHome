// 用户权限校验服务
const connection = require("../app/dataBase");

class AuthorityService {
	async checkResource(tableName, id, userId) {
		try {
			const statement = `SELECT * FROM ${tableName} WHERE id = ? AND user_id = ?;`;
			const [result] = await connection.execute(statement, [id, userId]);
			return result?.length > 0 ? true : false;
		} catch (error) {
      console.log(error);
    }
	}
}

module.exports = new AuthorityService();
