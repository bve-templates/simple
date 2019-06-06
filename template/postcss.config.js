const autoprefixer = require('autoprefixer')
const cssnano = require('cssnano')
const atImport = require('postcss-import')

module.exports = {
	ident: 'postcss',
	plugins: [
		autoprefixer(),
		cssnano(),
		atImport(),
	]
}