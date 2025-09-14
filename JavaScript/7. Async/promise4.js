function delay(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

delay(3000).then(() => alert('run after 3 seconds'));



function showCircle(x, y, r) {
	let div = document.createElement('div');
	div.style.width = 0;
	div.style.height = 0;
	div.style.left = x + 'px';
	div.style.top = y + 'px';
	div.className = 'circle';
	document.body.append(div);


	return new Promise(resolve => {
		setTimeout(() => {
			div.style.width = radius * 2 + 'px';
			div.style.height = radius * 2 + 'px';

			div.addEventListener('transitioned', function handler() {
				div.removeEventListener('transitioned', handler);
				resolve(div);
			})
		})
	})

}


showCircle(150, 150, 100).then(div => {
	div.classList.add('message-ball');
	div.append("Hello, world!");
});
