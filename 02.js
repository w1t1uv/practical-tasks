// setTimeout и setInterval

function run() {
	console.log('run!')
}

setTimeout(run, 1000)

setInterval(() => console.log('run!'), 2000)