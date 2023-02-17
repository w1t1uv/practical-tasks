// функция конструктор и оператор new

function User(name, age, isAdmin, city) {
	this.name = name
	this.age = age
	this.isAdmin = isAdmin
	this.city = city
}

let user = new User('Rob', 30, true, 'New York')