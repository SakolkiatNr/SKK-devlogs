new Promise(function(resolve, reject) {

	// A mock async action using setTimeout
	setTimeout(function() { resolve(10); }, 3000);
})
	.then(function(result) {
		console.log(result);
	});

// the `Then` callback triggered when the promise resolved. 


new Promise(function(resolve, reject) {
	// A mock async action using setimeout
	setTimeout(function() { resolve(10); }, 3000);
})
	.then(function(num) { console.log('first then: ', num); return num * 2; })
	.then(function(num) { console.log('second then: ', num); return num * 2; })
	.then(function(num) { console.log('last then: ', num); });

// From the console: 
// first then: 10
// second then: 20
// last then: 40


// Catch callback is executed when promise is rejected
new Promise(function(resolve, reject) {
	// A mock async action using set Timeout
	setTimeout(function() { reject('Done!'); }, 3000);

})
	.then(function(e) { console.log('done', e); })
	.catch(function(e) { console.log('catch: ', e); });

// From the console
//'catch: Done!' 


// finally callbacks is called regardless of success or failure:
(new Promise((resolve, reject) => { reject("Nope"); }))
	.then(() => { console.log("success") })
	.catch(() => { console.log("fail") })
	.finally(res => { console.log("finally") });

// >> fail
// >> finally



// when trigger multiple async interactions but only want to respond when all of them are complete use `Promise.all`
// `Promise.all` takes an array of promises and fires one callback once they are all resolved


Promise.all([promise1, promise2]).then(function(results) {
	// Both promises resolved
})
	.catch(function(error) {
		// One or more promises was rejected
	});


var request1 = fetch('/users.json');
var request2 = fetch('/articles.json');

Promise.all([request1, request2]).then(function(results) {
	// Both promises done!
});



var req1 = new Promise(function(resolve, reject) {
	// A mock async action using setTimeout
	setTimeout(function() { resolve('First!'); }, 4000);
});
var req2 = new Promise(function(resolve, reject) {
	// A mock async action using setTimeout
	setTimeout(function() { reject('Second!'); }, 3000);
});

Promise.all([req1, req2]).then(function(results) {
	console.log('Then: ', results);
}).catch(function(err) {
	console.log('Catch: ', err);
});

// From the console:
// Catch: Second!



// Promise.race is  triggers as soon as any promise in the array is resolved or rejected

var requ1 = new Promise(function(resolve, reject) {
	setTimeout(function() { resolve('First!'); }, 8000);
});
var requ2 = new Promise(function(resolve, reject) {
	setTimeout(function() { resolve('Second!'); }, 3000);
});

Promise.race([requ1, requ2]).then(function(one) {
	console.log('Then: ', one);
}).catch(function(one, two) {
	console.log('Catch: ', one);
});

//From the console:
//Then: Second!
