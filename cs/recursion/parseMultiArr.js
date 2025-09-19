// Given a multi-dimensional integer array, return the total number of integers stored inside this array

// var seven = totalIntegers([[[5], 3], 0, 2, ['foo'], [], [4, [5, 6]]]); // 7

function totalIntegers(arr) {
	if (arr.length === 0) return;

	let total = 0;
	let first = arr.shift();

	if (Array.isArray(first)) {
		total += totalIntegers(first);
	} else if (Number.isInteger(first)) {
		total++;
	}

	return total + totalIntegers(arr);
}
