var doorImage1 = document.getElementById('door1');
var doorImage2 = document.getElementById('door2');
var doorImage3 = document.getElementById('door3');
var openDoor1;
var openDoor2;
var openDoor3;

function randomChoreDoorGenerator() {
  var numClosedDoors = 2;
  let choreDoor = Math.floor(Math.random() * numClosedDoors);
  if (choreDoor === 0) {
    openDoor1 = beachDoorPath;
    openDoor2 = botDoorPath;
    openDoor3 = spaceDoorPath;
  } else if (choreDoor === 1) {
    openDoor1 = botDoorPath;
    openDoor2 = spaceDoorPath;
    openDoor3 = beachDoorPath;
  } else if (choreDoor === 2) {
    openDoor1 = spaceDoorPath;
    openDoor2 = beachDoorPath;
    openDoor3 = botDoorPath;
  }
}
	
var botDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg";

var beachDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg";

var spaceDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg";

door1.onclick = () => {
  doorImage1.src = openDoor1;
}

door2.onclick = () => {
  doorImage2.src = openDoor2;
}

door3.onclick = () => {
  doorImage3.src = openDoor3;
}

