alert("CONNECTED");
var p1Button=document.querySelector("#p1");
var p2Button=document.querySelector("#p2");

var p1display=document.querySelector("#p1Display");
var p2display=document.querySelector("#p2Display");

var resetButton=document.getElementById("reset");

var input=document.querySelector("#mm");
var score1=0;
var score2=0;
var gameover=false;
var winningscore=5;

var winningscoredisplay=document.querySelector("p span");

var h1=document.querySelector("h1");



p1Button.addEventListener("click",function(){
	if(!gameover){
		score1++;
	if(score1>=winningscore){
		p1display.classList.add("Winner");
		gameover=true;
		
	}
     p1display.textContent=score1;
	
	
	}
	
});

p2Button.addEventListener("click",function(){

	if(!gameover){
		score2++;

     if(score2>=winningscore){
     	p2display.classList.add("Winner");
		gameover=true;
	
	}
     p2display.textContent=score2;
	}
     
});

resetButton.addEventListener("click",function(){
	reset();
})

input.addEventListener("change",function(){
	winningscoredisplay.textContent=input.value;
	winningscore.textContent=input.value;
	reset();
})

function reset(){
	score1=0;
	score2=0;
	p1display.textContent=score1;
	p2display.textContent=score2;
	p1display.classList.remove("Winner");
	p2display.classList.remove("Winner");
	gameover=false;
}

