define(
	'bullfrog/steem/wallet/Wallet',
	'node-jsonrpc'
), (
	SteemWallet,
	jsonrpc
) {

function BlockEmitter = function(wallet) {
	this._wallet = wallet;
};

BlockEmitter.prototype.start = function() {
	this._forkProcess = child_process.fork();

	var self = this;
	this._forkProcess.on('message', function(message, socket) {
		for (var i = 0, n = self._listeners.length; i < n; ++i) {
			var callback = self._listeners[i]
			callback(message);	
		}	
	};
};

BlockEmitter.prototype.stop = function() {
};

BlockEmitter.prototype.on(callback) = function(callback) {
	this._listeners.push(callback);
};


return BlockEmitter;
)};



