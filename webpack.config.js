const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
	entry: './vue-todo/src/main.js',
	output: {
		path: __dirname + '/vue-todo/dist'
	},
	module: {
		rules: [
			{ test: /\.js$/, use: 'babel-loader' },
			{ test: /\.vue$/, use: 'vue-loader' },
			{ test: /\.css$/, use: ['vue-style-loader', 'css-loader'] },
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './vue-todo/src/vue-todo.html',
		}),
		new VueLoaderPlugin(),
	]
};