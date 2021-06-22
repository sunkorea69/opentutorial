class Person {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}
	speak() {
		console.log(`${this.name}:hello`);
	}
}

Person.prototype.kk = function () { console.log('a')};
var s = new Person('a','b');
s.speak();

class User {
	constructor(firstName, lastName, age) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.age = age;
	}

	get lastName() {
		return this._lastName;
	}
	set lastName(value) {
		this._lastName = value;
	}
	get age() {
		return this._age;
	}
	set age(value) {
		this._age = value;
	}
}

const user = new User ('steve', 'job', -1);
user.age;

const codition = true;
const promise = new Promise((resolve, reject) => {
	if(codition) {
		resolve('성공A');
	}else {
		reject('실패');
	}
});

promise.then((message)=>{
	console.log(message);
})
.catch((error)=>{
	console.log(error);
})

function oneMore() {
	console.log('one more');
}
function run() {
	console.log('run run');
	setTimeout(() => {
		console.log('wow');
	}, 0);
	new Promise((resolve) => {
		resolve('hi');
	}).then(console.log);
	oneMore();
}
setTimeout(run, 5000);
//run run
//one more
//hi
//wow