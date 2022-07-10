function EvenNumberDigits(nums) {
	let count = 0;
	for (let el of nums) {
		if (el.toString().length % 2 === 0) count++;
	}
	return count;
}

function EvenNumberDigits2(nums) {
	return nums
		.map((num) => {
			return num.toString().length;
		})
		.filter((item) => {
			return item % 2 == 0;
		}).length;
}
console.log(EvenNumberDigits2([555, 901, 482, 1771]));
