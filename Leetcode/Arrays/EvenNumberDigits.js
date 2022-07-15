/* // Given an array nums of integers, return how many of them contain an even number of digits.
Input: nums = [555,901,482,1771]
Output: 1 
Explanation: 
Only 1771 contains an even number of digits. */

function EvenNumberDigits(nums) {
	let count = 0;
	for (let el of nums) {
		if (el.toString().length % 2 === 0) count++;
	}
	return count;
}

function EvenNumberDigits2(nums) {
	return nums
		.map((num) => num.toString().length)
		.filter((item) => item % 2 == 0).length;
}
console.log(EvenNumberDigits2([555, 901, 482, 1771]));
