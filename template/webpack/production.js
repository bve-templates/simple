// 将css抽成单个文件
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const webpack = require('webpack')

module.exports = {
	mode: 'production',
	output: {
		filename: '[name].[chunkhash:5].js',
	},
	devtool: 'cheap-module-source-map',
	optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    },
    minimize: true,
  },
	module: {
		rules: [
			{
				test: /\.(gif|png|jpe?g|svg)$/i,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[name].[contenthash:5].[ext]',
							outputPath: './image/'
						}
					},
					// 图片压缩
					{
						loader: 'image-webpack-loader',
						options: {
							mozjpeg: {
								progressive: true,
								quality: 65
							},
							optipng: {
								enabled: false,
							},
							pngquant: {
								quality: '65-90',
								speed: 4
							},
							gifsicle: {
								interlaced: false,
							},
							webp: {
								quality: 75
							}
						}
					},
				],
			}
		]
	},
	plugins: [
		new webpack.ProgressPlugin(),
		// css抽取
		new MiniCssExtractPlugin({
			filename: '[name].[contenthash:5].css',
      chunkFilename: '[id].[contenthash:5].css',
		})
	]
};