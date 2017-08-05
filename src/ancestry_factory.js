//Factory Functions in JS - fun fun function

const dog = () => {
	const sound = "woof"
	const move = "4legs walks"
	return {
		talk: () => console.log(sound),

		move: () => console.log(move)
	}
}

const bird = () => {
	const sound = "chirp chirp"
	const move = "2wings flies"
	return {
		talk: () => console.log(sound),

		move: () => console.log(move)
	}
}

//we create 'sniffles' just like a prototype / class function, but only using private const, then recalling them in public
const sniffles = dog()
const birdie = bird()

//we make the new dog 'sniffles' to 'talk' and 'move'
sniffles.talk()
sniffles.move()

birdie.talk()
birdie.move()

const button = document.getElementsByTagName('.button')
button.onclick = (sniffles.talk)