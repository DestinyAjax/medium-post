const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
	entry: "./client/app/index.js",
	output: {
		path: path.join(__dirname, 'dist'),
		filename: "bundle.js"
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node-modules/,
				use: {
					loader: "babel-loader"
				}
			},
			{
				test: /\.css$/,
				use: ["style-loader","css-loader"]
			}
		]
	},
	devServer: {
	    port: 3000,
	    open: true,
	    proxy: {
	      "/api": "http://localhost:8080"
	    }
	 },
  	plugins: [
	    new CleanWebpackPlugin(["dist"]),
	    new HtmlWebpackPlugin({
	      template: "./client/public/index.html",
	      // favicon: "./client/public/favicon.ico"
	    })
	]
}