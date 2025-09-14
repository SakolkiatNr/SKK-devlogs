new Promise((resolve, reject) => {
	let condition = true;
	if (condition) { resolve('completed') }
	else { reject('error') }
})
	.finally(() => console.log('Promise ready'))
	.then(result => alert(result));

// Load script
function loadScript(src) {
	return new Promise((resolve, reject) {
		let script = document.createElement('script');
		script.src = src;

		script.onload = () => resolve(script);
		script.onerror = () => reject(new Error(`Script load error for ${src}`));

		document.head.append(script);
	});
}

// Usage

let promise = loadScript("https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js");

promise.then(
	script => alert(`${script} is loaded`),
	error => alert(`Error: ${error.message}`)
);
