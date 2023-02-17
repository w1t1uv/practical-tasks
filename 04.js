// spread

function info(firstName, lastName, ...other) {
	console.log(firstName + ' ' + lastName)

	console.log(other[0])
	console.log(other[1])
	console.log(other.length)
}

info('Alex', 'Cooper', 'Developer', 'USA')