/**
 * 作者：Hyhello
 * 时间：2019-07-11
 * 描述：toggle
 */

/* eslint-disable */
require(['gitbook', 'jQuery'], function toggle(gitbook, $) {
	console.log($);
	gitbook.events.bind('page.change', function change() {
		console.log(gitbook.events);
	});
});
