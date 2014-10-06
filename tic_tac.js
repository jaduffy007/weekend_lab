

// Set up players
var player1 = {name:"Player 1",marker:"X"};
var player2 = {name:"Player 2",marker:"O"};

var selectedMarker;
var counter = 0;


var selector = function(){
 if (counter%2 === 0){
    selectedMarker = player2.marker;
    console.log(selectedMarker);
 }
 else {
    selectedMarker = player1.marker;
    console.log(selectedMarker);
 }
};

var magic = function (event) {
  counter++;
	selector();
 	if (this.innerHTML === ""){
  this.innerHTML = selectedMarker;
	} else {
  return;
	}
};


var initialize = function (){
    // console.log("Window is done loading page.");
    for (var i = 0; i <= 8; i++) {
    	document.querySelector("#slot" + i).addEventListener("click",magic);
    	document.querySelector(".reset").addEventListener("click",myInnerHTML);
    }
};

// reset button code


var myBoxes = document.getElementsByClassName("col-xs-4");


var myInnerHTML = function () {
	for (var i = 0; i <  myBoxes.length; i++) {
		myBoxes[i].innerHTML = "";
		counter = 0;
	}
};

window.onload = initialize;

