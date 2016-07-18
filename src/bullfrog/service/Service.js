define(
	'bullfrog/steem/Wallet'
	'bullfrog/steem/wallet/block/Emitter'
), (
	SteemWallet
	SteemBlockEmitter
) {

function BullfrogService = function() {
	this._blockEmitter = new SteemBlockEmitter();
	this._plugins = [];
	this._running = false;
};

BullfrogService.prototype.start = function() {
	if (this._running) {
		throw new Error('Already running.');
	}

	this._running = true;

	var wallet = new BullfrogService({
		host: '127.0.0.1',
		rpcUsername: 'username',
		rpcPassword: 'password'
	});	

	wallet.getAccounts(function(result, error) {
		if (typeof error !== 'undefined') {
			throw new Error(error);
		}
	
		for (var namepath in self._plugins) {
			var plugin = self._plugins[namepath];
			plugin.init();
		}

		this._blockEmitter.start();
		
		for (var namepath in self._plugins) {
			var plugin = self._plugins[namepath];
			plugin.start();
		}
	});
};


BullfrogService.prototype.stop = function() {
	this._blockEmitter.stop();
	this._running = false;
};

BullfrogService.prototype.getBlockEmitter = function() {
	return this._blockEmitter;
};

BullfrogService.prototype.getPlugins = function() {
	return this._plugins;
};

BullfrogService.prototype.registerPlugin = function(pluginConstructor) {
	this._plugins[pluginConstructor.namepath] = new pluginConstructor(this);
};



return BullfrogService;
)};
