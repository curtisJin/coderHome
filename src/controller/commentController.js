const {
	create,
	getCommentById,
	getCommentList,
	updateComment,
	deleteCommentService,
} = require("../service/commentService");

class CommentController {
	async create(ctx, next) {
		// 1、获取 user_id、 content
		const userId = ctx?.user?.id;
		const content = ctx?.request?.body?.content;
		// 2、将数据插入到数据库
		const result = await create(userId, content);
		ctx.body = result;
	}

	async commentDetail(ctx, next) {
		// 1、获取数据commentId
		const { commentId } = ctx.params;

		// 2、根据commentId获取评论
		const result = await getCommentById(commentId);
		ctx.body = result;
	}

	async commentList(ctx, next) {
		// 获取请求数据
		const { offset, size } = ctx.query;
		// 查询列表
		const result = await getCommentList(offset, size);
		ctx.body = result;
	}

	async update(ctx, next) {
		const { commentId } = ctx.params;
		const { content } = ctx.request.body;
		const res = await updateComment(content, commentId);
		ctx.body = res;
	}

	async deleteComment(ctx, next) {
		const { commentId } = ctx.params;
		const res = await deleteCommentService(commentId);
		ctx.body = res;
	}
}

module.exports = new CommentController();
