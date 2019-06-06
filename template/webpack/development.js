// webpack服务器配置
const devServerConfig = require('./webpack.devServer')
// 将css抽成单个文件
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
	mode: 'development',
	output: {
		filename: '[name].[hash:5].js',
	},
	module: {
		rules: [
			// 图片处理
			{
				test: /\.(gif|png|jpe?g|svg)$/i,
				exclude: /(node_modules|bower_components)/,
				use: [
					{
						loader: 'url-loader',
						options: {
							name: 'image/[name].[contenthash:5].[ext]',
							outputPath: './image/',
							limit: 10000
						}
					}
				]
			},
		]
	},
	devtool: 'cheap-module-eval-source-map',
	// 服务器设置
	devServer: devServerConfig,
	plugins: [
		// css抽取
		new MiniCssExtractPlugin({
			filename: '[name].css',
      chunkFilename: '[id].css',
		}),
	]
};