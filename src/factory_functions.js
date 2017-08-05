'use strict'
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

//the showDialog menu goes private, then its called when the click is done
const showDialog = () => {
	event.preventDefault();
	$('.dialog').slideToggle();
}

//we create 'sniffles' just like a prototype / class function, but only using private const, then recalling them in public
const sniffles = dog()
const birdie = bird()

//we make the new dog 'sniffles' to 'talk' and 'move'
sniffles.talk()
sniffles.move()

birdie.talk()
birdie.move()


//adding functionality when clicking buttons via jQuery
$('#talk').click(sniffles.talk)
$('#move').click(sniffles.move)

$('#talkb').click(birdie.talk)
$('#moveb').click(birdie.move)

//and now for the dialog box in person ion-icon
$('#person').click(function(){
	showDialog();
})