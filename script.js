function fibonacci(num) {
// your code here
	if(num === 0){
		return 0;
	}
	else if(num === 1){
		return 1;
	}

	let prevNum = 0;
	let currNum = 1;
	for(let i = 2; i < num; i++){
		const temp = currNum;
		currNum = prevNum + currNum
		prevNum = temp;
	}

	return currNum;
}

module.exports = fibonacci;
