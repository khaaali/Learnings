/* 
 Given an array of integers of size ‘n’, Our aim is to calculate
  the maximum sum of ‘k’ consecutive elements in the array.
  eg.
Input  : arr[] = {1, 4, 2, 10, 23, 3, 1, 0, 20}, k = 4 
Output : 39
We get maximum sum by adding subarray {4, 2, 10, 23} of size 4.
*/

let arr = [1, 4, 2, 10, 2, 3, 1, 0, 20];
SlidingWindowBruteForce(arr, 3);

//  Complexity O(n2)
function SlidingWindowBruteForce(array, windowSize) {
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

function SlidingWindowBruteForce(array, windowSize) {
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
