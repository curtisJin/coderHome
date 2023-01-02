// 用户权限校验服务
const connection = require("../app/dataBase");

class AuthorityService {
	async checkComment(commentId, userId) {
		try {
			const statement = `SELECT * FROM comment WHERE id = ? AND user_id = ?;`;
			const [result] = await connection.execute(statement, [commentId, userId]);
			return result?.length > 0 ? true : false;
		} catch (error) {
      console.log(error);
    }
	}
}

module.exports = new AuthorityService();
