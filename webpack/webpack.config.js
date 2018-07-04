const path = require('path')
const webpack = require('webpack')

const WriteFilePlugin = require('write-file-webpack-plugin')
//const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const nodeExternals = require('webpack-node-externals')
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin')
const HappyPack = require('happypack')

const { clientEntry, serverEntry, clientOutput, serverOutput, nm, root } = require('./config/paths')

const aliases = require('./config/aliases')
const babel = require('./config/babel')
const rules = require('./config/rules')

const client = {
	name: 'client',
	target: 'web',
	mode: 'development',
	devtool: 'source-map',
	entry: ['webpack-hot-middleware/client?path=/__webpack_hmr&timeout=2000', clientEntry],
	output: {
		path: clientOutput,
		filename: '[name].js',
		publicPath: '/',
		chunkFilename: '[name].js',
		devtoolModuleFilenameTemplate: 'file:///[absolute-resource-path]' // map to source with absolute file path not webpack:// protocol
	},
	devServer: {
		overlay: true
	},
	resolve: {
		alias: aliases('client'),
		extensions: ['.mjs', '.js', '.jsx']
	},
	module: { rules },
	plugins: [
		new WriteFilePlugin({ test: /^(?!.*(hot)).*/ }),
		new webpack.HotModuleReplacementPlugin(),
		new HardSourceWebpackPlugin(),
		//new NpmInstallPlugin({save: true, yarn: true}),
		new HappyPack({ id: 'js', threads: 4, loaders: [babel('client')] }),
		new HappyPack({ id: 'css', threads: 4, loaders: ['css-loader'] }),
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development')
			}
		})
	]
}

const server = {
	name: 'server',
	target: 'node',
	mode: 'development',
	devtool: 'source-map',
	entry: [serverEntry],
	output: {
		path: serverOutput,
		filename: '[name].js',
		libraryTarget: 'commonjs2',
		devtoolModuleFilenameTemplate: '[absolute-resource-path]',
		devtoolFallbackModuleFilenameTemplate: '[absolute-resource-path]?[hash]'
	},
	externals: [
		nodeExternals({
			modulesDir: nm,
			whitelist: ['.bin', 'loadable-components', '@material-ui/core']
		})
	],
	module: { rules },
	resolve: {
		alias: aliases('server'),
		extensions: ['.mjs', '.js', '.jsx']
	},
	plugins: [
		new WriteFilePlugin(),
		new HardSourceWebpackPlugin(),
		new webpack.optimize.LimitChunkCountPlugin({
			maxChunks: 1
		}),
		//new NpmInstallPlugin({npm: 'yarn', yarn: true}),
		new HappyPack({ id: 'js', threads: 4, loaders: [babel('server')] }),
		new HappyPack({ id: 'css', threads: 4, loaders: ['css-loader'] }),
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development')
			}
		})
	]
}

module.exports = [client, server]
