// напишите рекурсивную функцию для вычисления суммы заданных положительных целых чисел a и b без прямого использования оператора +

function addition(a, b) {
	if (a == 0) {
		return b
	} else if (b == 0) {
		return a
	} else {
		let result = addition(a - 1, b)
		return ++result
	}
}

console.log(addition(1, 0))