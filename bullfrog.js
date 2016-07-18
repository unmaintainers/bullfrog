(function() {
	requirejs.config({
		baseUrl: 'js'	
	};

	requirejs(['bullfrog/Service', 'bullfrog/Config'], function(BullfrogService, Config) {
		Config.load(function(config) {
			var bullfrogService = new BullfrogService(config);
			bullfrogService.start();
		});
	});

})();
