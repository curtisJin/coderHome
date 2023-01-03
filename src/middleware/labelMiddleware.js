const { getLabel, create } = require('../service/labelService');

const isLabelExists = async(ctx, next) => {
  const { labels } = ctx.request.body;

  // 查询标签是否存在于label表中
  const labelList = [];
  for(let label of labels) {
    const res = await getLabel(label);
    if (res.length > 0) {
      // 如果存在
      const labelInfo = res[0];
      labelList.push({
        id: labelInfo?.id,
        name: labelInfo?.name,
      })
    } else {
      // 如果不存在
        // 创建标签数据
      const res = await create(label);
      labelList.push({
        id: res?.insertId,
        name: label,
      })
    }
  }

  ctx.labels = labelList;
  await next();
}


module.exports = {
  isLabelExists,
}