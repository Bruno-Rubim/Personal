function randomCard(cardList){
	let i = Math.random()*cardList.length;
	i = Math.floor(i);
	console.log(i);
	return "./images/pixel-" + cardList[i] + ".png"
}

function handleButton1 (){
	document.querySelector('#rand1 img').src = randomCard(playerCards);
}

function handleButton2 (){
	document.querySelector('#rand2 img').src = randomCard(leshyCards);
}

document.querySelector('#rand1 button').onclick = handleButton1;
document.querySelector('#rand2 button').onclick = handleButton2;