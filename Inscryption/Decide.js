function randomSelect(cardList){
	let i = Math.random()*cardList.length;
	i = Math.floor(i);
	console.log(i);
	return "./images/pixel-" + cardList[i] + ".png"
}

function handleButton1 (){
	document.querySelector('#rand1 img').src = randomSelect(playerCards);
}

function handleButton2 (){
	document.querySelector('#rand2 img').src = randomSelect(leshyCards);
}

function handleButton3 (){
	document.querySelector('#rand3 img').src = randomSelect(leshyCards);
}

document.querySelector('#rand1 button').onclick = handleButton1;
document.querySelector('#rand2 button').onclick = handleButton2;