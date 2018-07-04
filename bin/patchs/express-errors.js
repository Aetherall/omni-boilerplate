const Layer = require('express/lib/router/layer')

Layer.prototype.handle_request = function handle(req, res, next) {
	var fn = this.handle

	if (fn.length > 3) {
		// not a standard request handler
		return next()
	}
	fn(req, res, next)
}
