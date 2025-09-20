// Write a function that sums squares of numbers in list that may contain more lists
//
// l = [[1,2],3]; 
// console.log(SumSquares(l)); // 1 + 4 + 9 = 14

function sumSquares(arr) {
	// init sum
	//
	// if arr
	// sumSquares(arr)
	// sum += first value square

	//iterate
	if (arr.length === 0) return;

	let sum = 0;
	let first = arr.shift();

	if (Array.isArray(first)) {
		sum += sumSquares(first);
	} else if (Number.isInteger(first)) {
		sum += first * first;
	}

	sumSquares(arr);
	return sum;
}

function sumSquare(arr) {
	if (arr.length === 0) return;
	let total = 0;

	for (let i = 0; i < arr.length; i++) {
		if (Array.isArray(arr[i])) {
			total += sumSquare(arr[i]);
		} else {
			total += arr[i] * arr[i];
		}
	}
	return total;
}
