define(
	'fs'
), (
	fs
) {

function Config = function(config) {
	this._config = config;
};

Config.load = function(callback) {
	// load the main config
	
	// determine which plugins are available

	// if main config does not specify specific plugins
	// fill main "plugins" setting with all plugin names

	// load configs for each plugin
};

Config.prototype.config = function() {
	return this._config;
};


return Config;
)};



