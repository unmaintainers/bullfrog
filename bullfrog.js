
(function() {
	var wallet = new SteemWallet({
		host: '127.0.0.1',
		rpcUsername: 'username',
		rpcPassword: 'password'
	});	

	wallet.getAccounts(function(result, error) {
		for (var account in result) {
			wallet.vote(author, permalink, 100, true);
		}
	});
})();
