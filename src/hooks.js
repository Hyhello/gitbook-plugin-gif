/**
 * 作者：Hyhello
 * 时间：2019-07-05
 * 描述：钩子
 */

import tpl from './template';

const reg = /@\[(.*?)\]\((.*?)(?:\s+(.*))?\)/gm;

function convertGifToPng(src) {
	return new Promise(resolve => {
		const image = new Image();
		image.src = src;
		image.onload = function() {
			const canvas = document.createElement('canvas');
			const oCtx = canvas.getContext('2d');
			canvas.width = image.width;
			canvas.height = image.height;
			oCtx.beginPath();
			oCtx.drawImage(image, 0, 0);
			resolve(canvas.toDataURL());
		};
	});
}

export default {
	init(page) {
		// 1 在解析书籍之前调用，然后生成输出和页面，只运行一次
		console.log(1, page);
	},

	'page:before': function(page) {
		// 2 在页面上运行模板引擎之前调用
		page.content = page.content.replace(reg, async (_, $1, $2, $3) => {
			const src = await convertGifToPng($2);
			return tpl
				.replace('_IMAGE_SRC', src)
				.replace('_IMAGE_ALT', $1)
				.replace('_IMGAGE_GIF', $2)
				.replace('_IMAGE_TITLE', $3 || '');
		});
		return page;
	},
	page() {
		// 4 在输出和索引页面之前调用
	},
	'finish:before': function() {
		// 5 在生成页面之后调用，在复制资源之前，覆盖，只运行一次
	},
	finish() {
		// 6 只运行一次
	}
};
