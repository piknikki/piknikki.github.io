
let squares = 16;

function makeSquares(squares) {
	var container = document.querySelector('.gridcontainer');  //store grid in container

	for (i=1; i < squares * squares; i++) {  // size is number squared
		var myDiv = document.createElement('div'); 
		container.appendChild(myDiv);
		myDiv.classList.add('myDiv');
		}

	container.setAttribute('style', 'grid-template-columns: repeat(${squares}, auto)');
	// that sets css for the grid
}

// set random color number 
function random(number) {  
	return Math.floor(Math.random() * number);
}


// create color based on random number
function bgChange() { 
	var rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
	return rndCol;
}

var divs = document.querySelectorAll('div'); // find all divs and store them

for(var i = 0; i < divs.length; i++) { // loop through divs, change color when moused over
	divs[i].onmouseover = function(e) {  // when moused over, run function to target background and change
		e.target.style.backgroundColor = bgChange();
	}
}