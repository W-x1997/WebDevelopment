 

var colors=generateRandomColors(6);


var squares=document.querySelectorAll(".square");
var pickedColor=pickColor();
var colordisplay=document.getElementById("colordisplay");

var messagedisplay=document.querySelector("#message");

var  h1=document.querySelector("h1");

var resetButton=document.querySelector("#reset");

resetButton.addEventListener("click",function(){
	colors=generateRandomColors(6);
    pickedColor=pickColor();
    colordisplay.textContent=pickedColor;

   for(var i=0;i<squares.length;i++){
   	squares[i].style.background=colors[i];
   }

   h1.style.background="#232323";
});
 colordisplay.textContent=pickedColor;


for(var i=0;i<squares.length;i++){

	squares[i].style.background=colors[i];

	squares[i].addEventListener("click",function(){
    var clikcolor=this.style.background;
    if(clikcolor === pickedColor){
    	messagedisplay.textContent="Correct!";
    	resetButton.textContent="Play Again!";
         changeColors(clikcolor);
          h1.style.background=pickedColor;

    }else{
    	this.style.background="#232323";
    	messagedisplay.textContent="Try again!";
    }
    

});
}

function changeColors(color){
  for(var i=0;i<squares.length;i++){
  	squares[i].style.background=color;
  }
}

function pickColor(){
	var random=Math.floor(Math.random()*colors.length);
	return colors[random];
}


function generateRandomColors(num){
  var arr=[];
  for(var i=0;i<num;i++){
      arr.push(randomColor());
  }

  return arr;
}

function randomColor(){
  var red=Math.floor(Math.random()*256);
  var green=Math.floor(Math.random()*256);
  var blue=Math.floor(Math.random()*256);
 return "rgb("+red+", "+green+", "+blue+")";
}




