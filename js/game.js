var computer = Math.random();
//console.log the result of the math.random
console.log(computer)

//result
var result = "empty"

//the actual function
var rpsc = function(string){
	//computer chooses paper
	if(computer <= 0.33){
		//computer says it chose paper
		console.log("computer chose paper")
		//you choose rock
		if(string == "rock"){
			document.getElementById("text").innerHTML = "you have to be more sharper not dull"
		}
		//you choose paper
		else if(string == "paper"){
			document.getElementById("text").innerHTML = "You tied with the computer"
		}
		//you choose scissors
		else{
			document.getElementById("text").innerHTML = "You won"
		}
	}
	//computer chooses rock
	else if(computer >0.33 && computer <=0.66){
		//computer says it chose rock
		console.log("computer chose rock")
		//you choose rock
		if(string == "rock"){
			document.getElementById("text").innerHTML = "You tied with the computer"
		}
		//you choose scissors
		else if(string == "scissors"){
			document.getElementById("text").innerHTML = "You lost"
		}
		//you choose paper
		else{
			document.getElementById("text").innerHTML = "You won"
		}
	}
	//computer chooses paper
	else{
		//computer says it chose paper
		console.log("computer chose paper")
		//you choose paper
		if(string == "paper"){
			document.getElementById("text").innerHTML = "You tied with the computer"
		}
		//you choose rock
		else if(string == "rock"){
			document.getElementById("text").innerHTML = "You lost"
		}
		//you choose scissors
		else{
			document.getElementById("text").innerHTML = "You won"

		}
	}
}




var isMenuOpen = false;

var menuOpen = function() {
    $(".menu").finish();
    $(".menu").animate({
        left: "0px"
    }, 300);
    $(".menuButton").animate({
        left: "-20px"
    }, 200);

    isMenuOpen = true;
};
var menuClose = function() {
    $(".menu").finish();
    $(".menu").animate({
        left: "-240px"
    }, 300);
    $(".menuButton").animate({
        left: "0px"
    }, 200);
    
    isMenuOpen = false;
};
var menu = function() {
    $(".menuButton").click(function() {
        if (isMenuOpen === false) {
            menuOpen();
        }
        else {
            menuClose();
        }
    });
};

$(document).ready(menu);