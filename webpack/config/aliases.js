const path = require('path')

const { root } = require('./paths')

const aliasesFn = env => ({
	'omni:data': `./src/data`,
	'omni:hoc': `./src/HOC`,
	'omni:form': `./src/form`,
	'omni:css': `./src/css`,
	'omni:src': `./src`,
	'omni:routing': `./src/routing`,
	'omni:notif': `./src/notif`,
	'omni:async': `./src/routing/Async`,
	'omni:accounts': `./src/accounts`,
	'omni:lib': `./lib`,
	'omni:app': `./app`,
	'omni:user': `./src/user`,
	'omni:ui': './app/components',
	'omni:utils': `./src/utils`,
	'@accounts': `./node_modules/@accounts`,
	'graphql-binding': './node_modules/graphql-binding'
})

const resolveAliases = env => {
	const aliases = aliasesFn(env)
	let resolved = {}
	for (alias in aliases) {
		resolved[alias] = path.join(root, aliases[alias])
	}
	return resolved
}

module.exports = resolveAliases
