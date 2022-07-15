/* // Given a binary array nums, return the maximum number of consecutive 1's in the array.
Input: nums = [1,1,0,1,1,1]
Output: 3
Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.
 */
function MaxConsecutiveOnes(arr) {
	// An efficient solution is traverse array from left to right.
	// If we see a 1, we increment count and compare it with maximum so far.
	// If we see a 0, we reset count as 0.
	let maxOnes = 0;
	let count = 0;
	for (let i of arr) {
		if (i === 1) {
			count++;
			maxOnes = Math.max(maxOnes, count);
		} else {
			count = 0;
		}
	}
	return maxOnes;
}

let ar = [1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1];

console.log(MaxConsecutiveOnes(ar));
