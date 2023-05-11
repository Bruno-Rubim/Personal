const playerCards = [
	'stoat',
	'riversnapper',
	'grizzly',
	'wolf',
];

let serie = document.querySelector('.series');

function randomCard(cardGroup){
	let i = Math.random()*cardGroup.length;
	i = Math.floor(i);
	console.log(i);
	let cardName = cardGroup[i];
	serie.querySelector('.cardImage').src = "./images/pixel-" + cardName + ".png"

	//this.sibling > img.src = "./images/pixel-" + cardName + ".png"
}

serie.querySelector('.first').onclick = randomCard(playerCards);