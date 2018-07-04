const plugins = {
	client: ['react-hot-loader/babel'],
	server: [],
	common: [
		'@babel/proposal-object-rest-spread',
		'@babel/proposal-optional-chaining',
		'@babel/proposal-class-properties',
		['@babel/proposal-decorators', { legacy: true }],
		[
			'loadable-components/babel',
			{
				triggerModule: 'omni:routing',
				triggerImport: 'Async'
			}
		]
	]
}

const presets = {
	client: [],
	server: [],
	common: [['@babel/preset-react', { development: true }]]
}

const config = target => ({
	loader: 'babel-loader',
	options: {
		plugins: merge(target, plugins),
		presets: merge(target, presets),
		cacheDirectory: true,
		sourceMap: 'both',
		retainLines: true
	}
})

const merge = (target, config) => {
	const base = target === 'server' ? config.server : config.client
	return base.concat(config.common)
}

module.exports = config
