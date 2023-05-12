function randomSelect(cardList){
	let i = Math.random()*cardList.length;
	i = Math.floor(i);
	return "./images/pixel-" + cardList[i] + ".png"
}

function noRepeat(card1, card2, cardList){
	while (card1 == card2){
		card2 = randomSelect(cardList); 
	}
	return card2;
}

function handleButton1Player (){
	document.querySelector('#rand1Player img').src = randomSelect(playerCards);
}

function handleButton3Player (){
	let img1 = document.querySelector('#rand3Playerimg1');
	let img2 = document.querySelector('#rand3Playerimg2');
	let img3 = document.querySelector('#rand3Playerimg3');
	img1.src = randomSelect(playerCards);
	img2.src = randomSelect(playerCards);
	img3.src = randomSelect(playerCards);
	img2.src = noRepeat(img1.src, img2.src, playerCards);
	img3.src = noRepeat(img2.src, img3.src, playerCards);
}

function handleButton1Rare (){
	document.querySelector('#rand1Rare img').src = randomSelect(rareCards);
}

function handleButton3Rare (){
	let img1 = document.querySelector('#rand3Rareimg1');
	let img2 = document.querySelector('#rand3Rareimg2');
	let img3 = document.querySelector('#rand3Rareimg3');
	img1.src = randomSelect(rareCards);
	img2.src = randomSelect(rareCards);
	img3.src = randomSelect(rareCards);
	img2.src = noRepeat(img1.src, img2.src, rareCards);
	img3.src = noRepeat(img2.src, img3.src, rareCards);
}

function handleButton1Leshy (){
	document.querySelector('#rand1Leshy img').src = randomSelect(leshyCards);
}

function handleButton1Event (){
	document.querySelector('#rand1Event img').src = randomSelect(events);
}

document.querySelector('#rand1Player button').onclick = handleButton1Player;
document.querySelector('#rand3Player button').onclick = handleButton3Player;
//document.querySelector('#rand1Leshy button').onclick = handleButton1Leshy;
document.querySelector('#rand1Event button').onclick = handleButton1Event;
document.querySelector('#rand1Rare button').onclick = handleButton1Rare;
document.querySelector('#rand3Rare button').onclick = handleButton3Rare;
