// ======================================
// ------------- HOT SERVER -------------
// ======================================
require('./patchs/express-errors')

const http = require('http')

// Express Server
const express = require('express')

// Webpack libraries
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const webpackHotServerMiddleware = require('./webpack-hot-server-middleware')

// Webpack Config
const configs = require('../webpack/webpack.config')

// Creates Webpack compilers
const compilers = webpack(configs)

// Creates Express Instance
const app = express()

// Webpack Dev Middleware Options
const webpackDevMiddlewareOptions = {
	serverSideRender: true,
	stats: {
		colors: true,
		entrypoints: false,
		modules: false
	},
	publicPath: '/',
	watchOptions: {
		aggregateTimeout: 300,
		poll: true
	}
}

// Creates Webpack Middlewares Instances
const webpackDevMiddlewareInstance = webpackDevMiddleware(compilers, webpackDevMiddlewareOptions)
const webpackHotMiddlewareInstance = webpackHotMiddleware(compilers.compilers.find(compiler => compiler.name === 'client'))
const webpackHotServerMiddlewareInstance = webpackHotServerMiddleware(compilers)

// Express ==> serve Webpack
app.use(webpackDevMiddlewareInstance)
app.use(webpackHotMiddlewareInstance)
app.use(webpackHotServerMiddlewareInstance)

global.server = http.createServer(app)

server.listen(4000, () => {
	console.log('[ INIT ] => Server Started on port: 4000')
})

process.on('error', e => {
	console.log('error')
	console.error(e)
})
process.on('rejectionHandled', e => {
	console.log('rejectionHandled')
	console.error(e)
})
process.on('unhandledRejection', e => {
	console.log('unhandledRejection')
	console.error(e)
})
process.on('uncaughtException', e => {
	console.log('uncaughtException')
	console.error(e)
})
process.on('message', e => {
	console.log('message')
	console.error(e)
})
