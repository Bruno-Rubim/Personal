function randomSelect(cardList){
	let i = Math.random()*cardList.length;
	i = Math.floor(i);
	console.log(i);
	return "./images/pixel-" + cardList[i] + ".png"
}

function noRepeat(card1, card2, cardList){
	while (card1 == card2){
		card2 = randomSelect(cardList); 
	}
	return card2;
}

function handleButton1 (){
	document.querySelector('#rand1 img').src = randomSelect(playerCards);
}

function handleButton2 (){
	let img1 = document.querySelector('#rand2img1');
	let img2 = document.querySelector('#rand2img2');
	let img3 = document.querySelector('#rand2img3');
	img1.src = randomSelect(playerCards);
	img2.src = randomSelect(playerCards);
	img3.src = randomSelect(playerCards);
	img2.src = noRepeat(img1.src, img2.src, playerCards);
	img3.src = noRepeat(img2.src, img3.src, playerCards);
}

function handleButton3 (){
	document.querySelector('#rand3 img').src = randomSelect(leshyCards);
}

document.querySelector('#rand1 button').onclick = handleButton1;
document.querySelector('#rand2 button').onclick = handleButton2;
document.querySelector('#rand3 button').onclick = handleButton3;