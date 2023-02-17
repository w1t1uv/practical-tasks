// наслежование классов

class Animal {
	constructor(name) {
		this.name = name
		this.speed = 0
	}

	run() {
		console.log('Животное бежит!')
	}
}

let animal = new Animal('Cat')

class Dog extends Animal {
	bark() {
		console.log(`${this.name} лает`)
	}
}

let dog = new Dog('Husky')


