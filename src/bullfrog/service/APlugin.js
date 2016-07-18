define(
), (
) {

function APlugin = function(bullfrogService) {
	this._service = bullfrogService;
};

APlugin.prototype.init = function() {
};


APlugin.prototype.start = function() {
};


APlugin.prototype.stop = function() {
};

APlugin.prototype.getBlockEmitter = function() {
	return this._blockEmitter;
};

APlugin.prototype.getBullfrogService = function() {
	return this._service;
};

APlugin.prototype.getBlockEmitter = function() {
	return this._service.getBlockEmitter();
};

return APlugin;
)};
