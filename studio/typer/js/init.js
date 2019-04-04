

var lastTime;
var entryCount;

$(document).ready(function() {
		entryCount = 0;
	var displayCount = 0;

      //capture key presses
      $(document).on("keypress", function(e) {
      	e.preventDefault();
      	entryCount ++;
      	displayCount ++;

        //translate unicode to characters        
        var char = String.fromCharCode(e.which);
        console.log("entry #" + entryCount + " : " + e.which + " | " + char + ". Showing " + displayCount);
        createElement(char,entryCount);
    });

  //capture function keys
  $(document).on("keydown", function(e) {

  	var nowTime = Date.now();
  	if(lastTime !== undefined) {
  		var difference = nowTime - lastTime;
  		// this tells you the number of time between each press
  		transform(difference, entryCount);
  	}

  	function transform(difference, entryCount){
  		console.log(difference);
  		var elem = document.getElementById(entryCount);
  		//$( "div span:last-child" ).style.fontWeight = difference;
  		if (elem){
  			elem.style.letterSpacing = difference/3 + "px";	
  			elem.style.opacity = difference/90;
  		};
  		console.log(elem);
  	}

  	// now we're done with everything
  	lastTime = nowTime;


    //if pressed key is a backspace
    if (e.which == 8){
    	e.preventDefault();
    	entryCount ++;
    	console.log("entry #" + entryCount + " : " + e.which + " | BKSP. Showing " + displayCount);
    	deleteElement();
		displayCount --;
      if (displayCount < 0) {
        displayCount = 0;
      }
    }
});  
});


function createElement(k,entryCount) {

// letters
	var elem = $('#cursor');
	if (k == "a" || k == "A") { 
		elem.before('<span id = "' + entryCount + '" class="inner">A</span>'); 
	}
	if (k == "b" || k == "B") { 
		elem.before('<span id = "' + entryCount + '" class="inner">B</span>'); 
	}
	if (k == "c" || k == "C") { 
		elem.before('<span id = "' + entryCount + '" class="inner">C</span>'); 
	}
	if (k == "d" || k == "D") { 
		elem.before('<span id = "' + entryCount + '" class="inner">D</span>'); 
	}
	if (k == "e" || k == "E") { 
		elem.before('<span id = "' + entryCount + '" class="inner">E</span>'); 
	}
	if (k == "f" || k == "F") { 
		elem.before('<span id = "' + entryCount + '" class="inner">F</span>'); 
	}
	if (k == "g" || k == "G") { 
		elem.before('<span id = "' + entryCount + '" class="inner">G</span>'); 
	}
	if (k == "h" || k == "H") { 
		elem.before('<span id = "' + entryCount + '" class="inner">H</span>'); 
	}
	if (k == "i" || k == "I") { 
		elem.before('<span id = "' + entryCount + '" class="inner">I</span>'); 
	}
	if (k == "j" || k == "J") { 
		elem.before('<span id = "' + entryCount + '" class="inner">J</span>'); 
	}
	if (k == "k" || k == "K") { 
		elem.before('<span id = "' + entryCount + '" class="inner">K</span>'); 
	}
	if (k == "l" || k == "L") { 
		elem.before('<span id = "' + entryCount + '" class="inner">L</span>'); 
	}
	if (k == "m" || k == "M") { 
		elem.before('<span id = "' + entryCount + '" class="inner">M</span>'); 
	}
	if (k == "n" || k == "N") { 
		elem.before('<span id = "' + entryCount + '" class="inner">N</span>'); 
	}
	if (k == "o" || k == "O") { 
		elem.before('<span id = "' + entryCount + '" class="inner">O</span>'); 
	}
	if (k == "p" || k == "P") { 
		elem.before('<span id = "' + entryCount + '" class="inner">P</span>'); 
	}
	if (k == "q" || k == "Q") { 
		elem.before('<span id = "' + entryCount + '" class="inner">Q</span>'); 
	}
	if (k == "r" || k == "R") { 
		elem.before('<span id = "' + entryCount + '" class="inner">R</span>'); 
	}
	if (k == "s" || k == "S") { 
		elem.before('<span id = "' + entryCount + '" class="inner">S</span>'); 
	}
	if (k == "t" || k == "T") { 
		elem.before('<span id = "' + entryCount + '" class="inner">T</span>'); 
	}
	if (k == "u" || k == "U") { 
		elem.before('<span id = "' + entryCount + '" class="inner">U</span>'); 
	}
	if (k == "v" || k == "V") { 
		elem.before('<span id = "' + entryCount + '" class="inner">V</span>'); 
	}
	if (k == "w" || k == "W") { 
		elem.before('<span id = "' + entryCount + '" class="inner">W</span>'); 
	}
	if (k == "x" || k == "X") { 
		elem.before('<span id = "' + entryCount + '" class="inner">X</span>'); 
	}
	if (k == "y" || k == "Y") { 
		elem.before('<span id = "' + entryCount + '" class="inner">Y</span>'); 
	}
	if (k == "z" || k == "Z") { 
		elem.before('<span id = "' + entryCount + '" class="inner">Z</span>'); 
	}

//numbers
	if (k == "1" || k == "1") { 
		elem.before('<span id = "' + entryCount + '" class="inner">1</span>'); 
	}
	if (k == "2" || k == "2") { 
		elem.before('<span id = "' + entryCount + '" class="inner">2</span>'); 
	}
	if (k == "3" || k == "3") { 
		elem.before('<span id = "' + entryCount + '" class="inner">3</span>'); 
	}
	if (k == "4" || k == "4") { 
		elem.before('<span id = "' + entryCount + '" class="inner">4</span>'); 
	}
	if (k == "5" || k == "5") { 
		elem.before('<span id = "' + entryCount + '" class="inner">5</span>'); 
	}
	if (k == "6" || k == "6") { 
		elem.before('<span id = "' + entryCount + '" class="inner">6</span>'); 
	}
	if (k == "7" || k == "7") { 
		elem.before('<span id = "' + entryCount + '" class="inner">7</span>'); 
	}
	if (k == "8" || k == "8") { 
		elem.before('<span id = "' + entryCount + '" class="inner">8</span>'); 
	}
	if (k == "9" || k == "9") { 
		elem.before('<span id = "' + entryCount + '" class="inner">9</span>'); 
	}
	if (k == "0" || k == "0") { 
		elem.before('<span id = "' + entryCount + '" class="inner">0</span>'); 
	}

	if (k == " ") { elem.before('<span class="inner">&nbsp;</span>'); }
};

//this is for backspace
function deleteElement(){
	$(".inner").last().remove();
};

