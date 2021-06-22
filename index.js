const { odd, even } = require('./var');
const checkNumber = require('./func');

console.log(checkNumber(2));
console.time('zerocho');
console.log(message);
console.timeEnd('zerocho');
console.error('a');
// console.trace('a');
console.table([{ a: 'a', b: 'b' }, { a: 'aa', b: 'bb' }])
setTimeout(() => {
	console.log(2000);
}, 2000);
var ss = setInterval(() => {
	console.log('call');
}, 2);

clearInterval(ss);


function aa() {
	// console.log(this);
}
aa();
function oneMore() {
	console.log('one more');
}
function run() {
	console.log('run run');
	setTimeout(() => { console.log('wow'); }, 0);
	new Promise((resolve) => {
		if (true) {
			console.log ('true');
		}
		 resolve('hi'); })
	.then(console.log);
	oneMore();
}

setTimeout(run, 5000);