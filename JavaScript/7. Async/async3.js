async function f() {
	let promise = Promise.resolve('yay');
	let result = await promise;
	return result;
}

f().then(value => console.log(value))



// Error handling
async function fn() {
	try {
		let response = await fetch('url');
	} catch (err) {
		console.log('oopsie');
	}
}

fn();


// with Promise.all
// if want to wait for the array of results
let results = await Promise.all([
	fetch(url1),
	fetch(url2),
]);
