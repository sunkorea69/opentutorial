const {odd, even, tot} = require('./var.js');
console.log(odd, even, tot);

function checkOddOreven(number) {
	if (number % 2) {
		return odd;
	} else {
		return even;
	}
}
exports.odd = odd;
exports.even = even;
module.exports = checkOddOreven;