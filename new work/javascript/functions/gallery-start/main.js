var displayedImage = document.querySelector('.displayed-img');
var thumbBar = document.querySelector('.thumb-bar');  // store reference  to div

btn = document.querySelector('button');
var overlay = document.querySelector('.overlay');



for(i=1; i <= 5; i++) {  // loop through 5 images
  var newImage = document.createElement('img');  // create a new image element
  newImage.setAttribute('src', 'images/pic' + i + '.jpg'); // set source to placeholder and append img element to bar
  thumbBar.appendChild(newImage);

  // newImage event handler
  newImage.onclick = function(e) {  // event targets src to get image
  	var imgSrc = e.target.getAttribute('src');
  	displayImage(imgSrc);  // run function below
  }

}


	// event handler to set src attribute to the src value passed as a param
function displayImage(imgSrc) {  // targeted image is parameter
	displayedImage.setAttribute('src', imgSrc);  // make that image a src
}


// event handler for dark/light button
btn.onclick = function() {  // anonymous function
	var btnClass = btn.getAttribute('class');  // check class name on button
	if (btnClass === 'dark') {  // if it's dark, change it to light
		btn.setAttribute('class', 'light');
		btn.textContent = 'Lighten';  // change text content of button
		overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';  // make overlay translucent
	} else {
		btn.setAttribute('class', 'dark');  // if it's anything else, change it to dark
		btn.textContent = 'Darken';
		overlay.style.backgroundColor = 'rgba(0,0,0,0)';
	}
}


