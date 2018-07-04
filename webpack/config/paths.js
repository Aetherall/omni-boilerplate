const path = require('path')

const root = path.join(__dirname, '../..')

const clientEntry = path.join(root, './client/index.js')

const serverEntry = path.join(root, './server/index.js')

const clientOutput = path.join(root, './dist/client')

const serverOutput = path.join(root, './dist/server')

const nm = path.join(root, 'node_modules')

module.exports = {
	root,
	clientEntry,
	serverEntry,
	clientOutput,
	serverOutput,
	nm
}
