
for(var i = 1; i <= 16; i++) { // loop to create container and store as html
			var myDiv = document.createElement('div'); //  count up

			document.body.appendChild(myDiv);
		}

function random(number) {  // function to come up with random number
			return Math.floor(Math.random() * number);
		}

function bgChange() { // function to create color based on random color picker
	var rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
	return rndCol;
}

var divs = document.querySelectorAll('div'); // variable to store divs

for(var i = 0; i < divs.length; i++) { // loop through divs, change color when moused over
	divs[i].onmouseover = function(e) {  // when moused over, run function to target background and change
		e.target.style.backgroundColor = bgChange();
	}
}


