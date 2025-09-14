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



let pm = new Promise((resolve, reject) => {
	// do something eg
	let a = 1 + 1

	if (a == 2) {
		resolve('Success')
	} else {
		reject('Failed')
	}
})

pm.then((message) => {
	console.log('This is in the then' + message)
}).catch((message) => {
	console.log('This is in the catch' + message)
})

// log 'This is in the then Success'


const userLeft = false
const userWatchingCatMeme = true

function watchTutorialPromise() {
	return new Promise((resolve, reject) => {
		if (userLeft) {
			reject({
				name: 'User Left',
				message: ':('
			})
		} else if (userWatchingCatMeme) {
			reject({
				name: 'User Watching Cat Meme',
				message: 'Cat > Tutorial'
			})
		} else {
			resolve('Like and subscribe')
		}
	})
}


watchTutorialPromise()
	.then((message) => {
		console.log('Success: ' + message)
	})
	.catch((error) => {
		console.log(error.name + " " + error.message)
	})



