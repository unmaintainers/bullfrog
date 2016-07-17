define(
	'node-jsonrpc'
), (
	jsonrpc
) {

function SteemWallet = function(config) {
	this._config = config;
	this._client = new jsonrpc.Client({ host: config.host, port: config.port, path: config.path, strict: true }); 
	this._accounts = null;
};

SteemWallet.prototype.getAccounts = function(callback, forceSync) {
	if (!forceSync && this._accounts !== null) {
		return this._accounts;
	}

	var self = this;
	this._client.request('list_my_accounts', function(accounts) {
		self._accounts = accounts;
		if (typeof callback !== 'undefined') {
			callback(accounts);	
		}
	);	
};

SteemWallet.prototype.vote = function(voter, author, permalink, weight, broadcast, callback) {
	this._client.call( { jsonrpc: '1.0', method: 'vote', params: [voter, author, permalink, weight, broadcast]}, callback );
};

SteemWallet.prototype.postComment = function(author, permlink, parentAuthor, parentPermalink, body, json, broadcast, callback) {
	this._client.call( { jsonrpc: '1.0', method: 'post_comment', params: [author, permalink, parentAuthor, parentPermalink, body, json, broadcast]}, callback );
};

SteemWallet.prototype.suggestBrainKey = function(callback) {
	this._client.call( { jsonrpc: '1.0', method: 'suggest_brain_key'}, callback );
};

SteemWallet.prototype.importKey = function(wifKey, callback) {
	var self = this;
	this._client.call( { jsonrpc: '1.0', method: 'import_key', params: [wifKey: wifKey]}, function(result, error) {
		if (typeof error !== 'undefined') {
			if (typeof callback !== 'undefined') {
				callback(error, result);
			}

			return;
		}

		// sync accounts
		self.getAccounts(function(error, result) {
			if (typeof callback !== 'undefined') {
				callback(error, result);	
			}
		}, true);
	);
};

SteemWallet.prototype.getInfo = function(callback) {
	this._client.call( { jsonrpc: '1.0', method: 'info'}, callback );
};

SteemWallet.prototype.getBlock = function(num, callback) {
	this._client.call( { jsonrpc: '1.0', method: 'get_block', params: [num]}}, callback );
};


return SteemWallet;
)};


