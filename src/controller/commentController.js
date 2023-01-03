const {
	create,
	getCommentById,
	getCommentList,
	updateComment,
	deleteCommentService,
	addLabels,
	hasLabelCheck
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

	async addLabels(ctx, next) {
		// 1. 获取标签和动态id
		const { commentId } = ctx.params;
		const { labels } = ctx;

		// 2. 添加所有标签
		for(let label of labels) {
			// 2.1 判断标签是否和动态有关系
			const hasLabel = await hasLabelCheck(commentId, label?.id);
			if (!hasLabel) {
				// 表中没有对应关系
				await addLabels(commentId, label?.id);
			}
		}
		ctx.body = '标签增加成功';
	}
}

module.exports = new CommentController();
