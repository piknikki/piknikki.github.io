
var myHeading = document.querySelector('h1'); // find h1, store in variable
myHeading.textContent = 'Hello world!' ; // tell it what to say in h1

var myImage = document.querySelector('img');  // find img store in variable

myImage.onclick = function() {  // function to run when image is clicked on
	var mySrc = myImage.getAttribute('src'); // get source, store in variable

	// this conditional switches the path for the images.
	if (mySrc === 'images/firefox2.png') {  // if source is this
		myImage.setAttribute('src', 'images/firefox-icon.png'); // set image to this 

	} else {
		myImage.setAttribute('src', 'images/firefox2.png');  // otherwise, set to this
	}  
}


var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');  // select the item and store in variable

// set personalized greeting

function setUserName() {
	var myName = prompt('Please enter your name.');  // asks for input and stored in variable
	localStorage.setItem('name', myName);  // stores entered name in browser (local)
	myHeading.innerHTML = 'Some people call me the SpaceCowboy, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Some people call me Maurice, ' + storedName;
}


// onclick event handler!!  or else it won't do anything, silly!
// event handler runs function when clicked.

myButton.onclick = function() {
  setUserName();
}