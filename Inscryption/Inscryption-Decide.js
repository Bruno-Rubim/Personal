const playerCards = [
	'stoat',
	'riversnapper',
	'grizzly',
	'wolf',
];

let buttonRandomCard1 = document.querySelector('#first');
function randomCard(cardGroup){
	let cardName = Math.random()*cardGroup.length;
	this.sibling > img.src = "./images/pixel-" + cardName + ".png"
}
buttonRandomCard1.onclick = randomCard(playerCards);