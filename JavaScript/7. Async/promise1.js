// Basic promise usage
var p = new Promise(function(resolve, reject) {
	// Do an async task async task and then ...
	if ( /*good condition*/true) {
		resolve('success');
	}
	else {
		reject('failure!');
	}
});

p.then(function(result) {
	/* do something with the result */
}).catch(function() {
	/* error */
}).finally(function() {
	/* executes regardless or success for failure */
});



