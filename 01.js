// методы массивов

let arr = [1, 2, 3]

arr.push(4)
arr.pop()
arr.unshift(0)
arr.shift()
arr.splice(0, 1)

let newArr = arr.concat([4, 5])

arr.forEach(alert)

arr.includes(2)

let arr1 = [
	{name: Alex, age: 30},
	{name: Sam, age: 31},
	{name: John, age: 20}
]

let user = arr1.find(item => item.age == 20)

console.log(user.name)

arr1.map(item => item.length)

let fruits = 'Apple, Peach, Orange'

let arr2 = fruits.join(', ')

let res = arr.reduce((sum, current) => sum + current, 0)

console.log(res)

