(function() {
	requirejs.config({
		baseUrl: '../../../../../js'	
	};

	requirejs(['bullfrog/steem/block/RpcEmitter', 'bullfrog/Config'], function(RpcEmitter, Config) {
		Config.load(function(config) {
			var rpcEmitter = new RpcEmitter(config);
			rpcEmitter.start();
		});
	});
})();
