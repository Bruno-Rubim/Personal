const playerCards = [
	'stoat',
	'riversnapper',
	'grizzly',
	'wolf',
];

function randomCard(cardList){
	let i = Math.random()*cardList.length;
	i = Math.floor(i);
	console.log(i);
	return "./images/pixel-" + cardList[i] + ".png"
}

function handleButton1 (){
	document.querySelector('#rand1 img').src = randomCard(playerCards);
}

document.querySelector('#rand1 button').onclick = handleButton1;