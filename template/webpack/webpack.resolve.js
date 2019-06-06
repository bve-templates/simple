/**
 * 这些选项能设置模块如何被解析
 * 
 */
const resolve = require('path').resolve

module.exports = {
	// 自动解析确定的扩展
	extensions: ['.js', '.json'],
	// 目录别名
	alias: {
		'$components': resolve("./src/components"),
		'$images': resolve("./src/images"),
		'$routers': resolve("./src/routers")
	}
}