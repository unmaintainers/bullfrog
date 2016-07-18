(function() {
	requirejs.config({
		baseUrl: 'js'	
	};

	requirejs(['bullfrog/Service'], function(BullfrogService) {
		var bullfrogService = new BullfrogService();
		bullfrogService.start();
	});

})();
