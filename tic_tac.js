

var player1 = {
	name: "Player1",
	marker: "X",
	clicked:[]
};
var player2 = {
	name: "Player2",
	marker: "O",
	clicked: []
};

var selector = function () {
	if (counter%2 === 0) {
		var selectedmarker = player1.marker1;
	}else{
			selectedmarker = player2.marker;
	}
};


var counter = 0;
var magic = function () {
	counter++;
	};



var initialize = function () {

	document.querySelector("#slot0").addEventListener("click",magic);
	document.querySelector("#slot1").addEventListener("click",someFunction);
	document.querySelector("#slot2").addEventListener("click",someFunction);
	document.querySelector("#slot3").addEventListener("click",someFunction);
	document.querySelector("#slot4").addEventListener("click",someFunction);
	document.querySelector("#slot5").addEventListener("click",someFunction);
	document.querySelector("#slot6").addEventListener("click",someFunction);
	document.querySelector("#slot7").addEventListener("click",someFunction);
	document.querySelector("#slot8").addEventListener("click",someFunction);
};

