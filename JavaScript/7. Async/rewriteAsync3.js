// Call async from non-async
// We have a “regular” function called f. How can you call the async function wait() and use its result inside of f?

async function wait() {
	await new Promise(resolve => setTimeout(resolve, 1000));

	return 10;
}

function f() {
	wait().then(result => console.log(result));
}

f();
