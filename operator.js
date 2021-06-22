console.log('my'+'cat');
console.log('1'+2);

console.log(1+1);

let counter = 2;
console.log('-----');
console.log(++counter);
console.log(counter);
console.log('-----');
console.log(counter++);
console.log(counter);

var add = function (a,b) {
	return a+b;
}

var sub = function (a,b) {
	return a-b;
}

 var comm = function (co, a, b) {
	 if (co == 'add') {
 		console.log(a(10,20));
 	}else if (co == 'sub'){
 		console.log(b(30,10));
 	}
 }
 comm('sub', add, sub);