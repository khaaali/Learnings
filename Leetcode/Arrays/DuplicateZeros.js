/* 
Given a fixed-length integer array arr, duplicate each occurrence of zero, shifting the remaining elements to the right.
Note that elements beyond the length of the original array are not written. Do the above modifications to the input array in place and do not return anything.
eg:
Input: arr = [1,0,2,3,0,4,5,0]
Output: [1,0,0,2,3,0,0,4]
Explanation: After calling your function, the input array is modified to: [1,0,0,2,3,0,0,4]

*/

//  utilising and additional array
var duplicateZerosWithArray = function (arr) {
	let arr2 = [];
	// if current element is 0, add 0 to next index and shift right
	let count = 0;
	for (let ar of arr) {
		if (ar === 0) {
			arr2.push(0);
			arr2.push(0);
			count++;
		} else {
			arr2.push(ar);
		}
	}

	for (let i = count; i > 0; i--) {
		arr2.pop();
	}

	return arr2;
};

var duplicateZerosInplaceArray = function (arr) {


	
};

console.log(duplicateZerosWithArray([1, 0, 2, 3, 0, 4, 5, 0]));
console.log(duplicateZerosInplaceArray([1, 0, 2, 3, 0, 4, 5, 0]));
