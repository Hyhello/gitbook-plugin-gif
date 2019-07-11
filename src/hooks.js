/**
 * 作者：Hyhello
 * 时间：2019-07-05
 * 描述：钩子
 */

import tpl from './template';

console.log(tpl);

const reg = /@\[(.*?)\]\((.*?)(?:\s+(.*))?\)/gm;

export default {
	init(page) {
		// 1 在解析书籍之前调用，然后生成输出和页面，只运行一次
		console.log(1, page);
	},

	'page:before': function pageBefore(page) {
		// 2 在页面上运行模板引擎之前调用
		page.content = page.content.replace(reg, (_, $1, $2, $3) => {
			return tpl
				.replace('_IMAGE_SRC', $1)
				.replace('_IMAGE_ALT', $2)
				.replace('_IMAGE_TITLE', $3 || '');
		});
		return page;
	},
	page(page) {
		// 4 在输出和索引页面之前调用
		console.log('4', page);
	},
	'finish:before': function finishBefore(page) {
		// 5 在生成页面之后调用，在复制资源之前，覆盖，只运行一次
		console.log(5, page);
	},
	finish() {
		// 6 只运行一次
		console.log('只运行一次');
	}
};
