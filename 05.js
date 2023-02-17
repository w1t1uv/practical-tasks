// сравнение двух объектов

let user1 = {
	name: 'Alex',
	age: 30
}

let user2 = {
	name: 'John',
	age: 22
}

let isEqual = JSON.stringify(user1) === JSON.stringify(user2)