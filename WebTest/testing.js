const jon = document.querySelector('#jon');
jon.pos = 10;
jon.speed = 0;


function calculatePhysics(){
	jon.pos += jon.speed;
    jon.style.margin = jon.pos +"px";
}

document.addEventListener("keydown", function(event) {
	if (event.key === "Enter") {
	    // Code to execute when Enter key is pressed
	    jon.speed++;
	    console.log("Enter key pressed");
	}
});

document.addEventListener("mouseover", function(event) {
	console.log("a")
});

