// Async function will return Promise
// it's just syntactical sugar for promises


const yourAsyncFunction = async () => {
	// do something asynchronously and return a promise
	return result;
}

anArray.forEacy(async item => {
	// so something asynchronously for each item in anArray
});

// await
// tell Js to wait for an async action to finish befor continuing the function


// Error handling
// promise have `.catch()` method for handling rejected promise

asyncFunctionCall().catch(err => {
	console.error(err)
});

// Or try in async syntax
async function getPersonsInfo(name) {
	try {
		const people = await server.getPeople();
		const person = people.find(person => {
			return person.name === name
		});
		return person;
	} catch (error) {
		// Handle the error
	}

















