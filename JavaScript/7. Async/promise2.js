function get(url) {
	// Return a new promise.
	return new Promise(function(resolve, reject) {
		// Do the usual XHR stuff
		var req = new XMLHttpRequest();
		req.open('GET', url);

		req.onload = function() {
			// This is called even on 404 etc
			// so check the status
			if (req.status == 200) {
				// Resolve the promise with the response text
				resolve(req.response);
			}
			else {
				// Otherwise reject with the status text
				// which will hopefully be a meaningful error
				reject(Error(req.statusText));
			}
		};


		//Handle network errors
		req.onerror = function() {
			reject(Error("Network Error"));
		};

		// Make the request
		req.send();
	});
}


get('story.json').then(function(response) {
	console.log("Success!", response);
}, function(error) {
	console.error("Failed", error);
});


var userCache = {};

function getUserDetail(username) {
	// In both cases, cached or not, a promise will be returned

	if (userCache[username]) {
		// Return a promise without the "new" keyword
		return Promise.resolve(userCache[username]);
	}
	// Use the fetch API to get the information 
	// fetch returns a promise
	return fetch('user/' + username + '.json')
		.then(function(result) {
			userCache[username] = result;
			return result;

		})
		.catch(function() {
			throw new Error('Could not find user: ' + username);
		});
}






