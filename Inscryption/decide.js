function randomSelect(cardList){
	let i = Math.random()*cardList.length;
	i = Math.floor(i);
	return "./images/pixel-" + cardList[i] + ".png"
}

function noRepeat(card1, card2, cardList){
	console.log(card1);
	while (card1 == card2){
		card2 = randomSelect(cardList); 
	}
	return card2;
}

function handleButton1Player (){
	document.querySelector('#rand1Player img').src = randomSelect(playerCards);
}

function handleButton3Player (){
	let imgs = document.querySelectorAll('#rand3Player img');
	for (var i = 0; i < imgs.length; i++) {
		let newcard = randomSelect(playerCards);
		if (i!=0){
			newcard = noRepeat(imgs[i-1].src, newcard, playerCards);
		}
		imgs[i].src = newcard;
	}
}

function handleButton1Rare (){
	document.querySelector('#rand1Rare img').src = randomSelect(rareCards);
}

function handleButton3Rare (){
	let imgs = document.querySelectorAll('#rand3Rare img');
	for (var i = 0; i < imgs.length; i++) {
		let newcard = randomSelect(rareCards);
		if (i!=0){
			newcard = noRepeat(imgs[i-1].src, newcard, rareCards);
		}
		imgs[i].src = newcard;
	}
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
