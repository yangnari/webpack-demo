//CommonJS 스펙의 모듈 가져오기: require => import, 배포하기: export => export
const path = require('path'); //노드에 기본적으로 포함되어 있는 모듈
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = { //전체 배포 방법
	entry: './src/index.js', //진입점
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'build')
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"]
			},
			{
				test: /\.scss$/,
				use: ["style-loader", "css-loader", "sass-loader"]
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin()
	]
};