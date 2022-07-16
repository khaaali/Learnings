/* 
 Given an array of integers of size ‘n’, Our aim is to calculate
  the maximum sum of ‘k’ consecutive elements in the array.
  eg.
Input  : arr[] = {1, 4, 2, 10, 23, 3, 1, 0, 20}, k = 4 
Output : 39
We get maximum sum by adding subarray {4, 2, 10, 23} of size 4.
*/

let arr = [1, 4, 2, 10, 2, 3, 1, 0, 20];
BruteForce(arr, 6);
SlidingWindow(arr, 6);

//  Complexity O(n2)
function BruteForce(array, windowSize) {
	if (windowSize > array.length) return;
	let maxSum = 0;
	// loop through outer array for elements length relative to window size
	for (let out = 0; out <= array.length - windowSize; out++) {
		let currentSum = 0;
		// loop through the window size of sub array ->{1,4,2,10}
		for (let inn = out; inn < out + windowSize; inn++) {
			currentSum += array[inn];
		}
		maxSum = Math.max(currentSum, maxSum);
	}
	console.log(maxSum);
}

// O(n)
function SlidingWindow(array, windowSize) {
	if (windowSize > array.length) return;
	let maxSum = 0;
	let currentSum = 0;
	// loop through array for elements length
	for (let out = 0; out < array.length; out++) {
		// when current out is > window size : our window size is reached and should be maintained
		//  added current index element and delete first index element of current window
		currentSum += array[out];
		if (out > windowSize - 1) {
			currentSum = currentSum - array[out - windowSize];
			maxSum = Math.max(currentSum, maxSum);
		}
	}
	console.log(maxSum);
}

//  to learn
// inplace array index element shift right
