var numberofsquares=6;
var colors=generateRandomColors(numberofsquares);
var squares=document.querySelectorAll(".square");
var pickedColor=pickColor();
var colordisplay=document.getElementById("colordisplay");
var messagedisplay=document.querySelector("#message");
var  h1=document.querySelector("h1");
var resetButton=document.querySelector("#reset");
var modeButtons=document.querySelectorAll(".mode");



init();

function init(){
	for(var i=0;i<modeButtons.length;i++){
	modeButtons[i].addEventListener("click",function(){
       modeButtons[0].classList.remove("selected");
       modeButtons[1].classList.remove("selected");
        this.classList.add("selected");
        this.textContent==="Easy"? numberofsquares=3:numberofsquares=6;
        reset();
	});
}



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

reset();
}







function reset(){
	colors=generateRandomColors(numberofsquares);
    pickedColor=pickColor();
    colordisplay.textContent=pickedColor;
    
   resetButton.textContent="New Colors";
    messagedisplay.textContent="";


   for(var i=0;i<squares.length;i++){
   	if(colors[i]){
         squares[i].style.display="block";
   		squares[i].style.background=colors[i];
   	}else{
   		squares[i].style.display="none";
   	}
   }

   h1.style.background="steelblue";

}

// easybtn.addEventListener("click",function(){
//   numberofsquares=3;
//   hardbtn.classList.remove("selected");
//   easybtn.classList.add("selected");
//   colors=generateRandomColors(numberofsquares);
//   pickedColor=pickColor();
//   colordisplay.textContent=pickedColor;

//   for(var i=0;i<squares.length;i++){
//   	if(colors[i]){
//   		squares[i].style.background=colors[i];
//   	}else{
//   		squares[i].style.display="none";
//   	}
//   }

// });

// hardbtn.addEventListener("click",function(){
// numberofsquares=6;
// easybtn.classList.remove("selected");
// hardbtn.classList.add("selected");
//   colors=generateRandomColors(numberofsquares);
//   pickedColor=pickColor();
//   colordisplay.textContent=pickedColor;

//   for(var i=0;i<squares.length;i++){
  
//   		squares[i].style.background=colors[i];
//   		squares[i].style.display="block";
  	
//   }

// });

resetButton.addEventListener("click",function(){
	colors=generateRandomColors(numberofsquares);
    pickedColor=pickColor();
    colordisplay.textContent=pickedColor;
    
   this.textContent="New Colors";
    messagedisplay.textContent="";


   for(var i=0;i<squares.length;i++){
   	squares[i].style.background=colors[i];
   }

   h1.style.background="steelblue";
  

});
 colordisplay.textContent=pickedColor;
 

// for(var i=0;i<squares.length;i++){

// 	squares[i].style.background=colors[i];

// 	squares[i].addEventListener("click",function(){
//     var clikcolor=this.style.background;
//     if(clikcolor === pickedColor){
//     	messagedisplay.textContent="Correct!";
//     	resetButton.textContent="Play Again!";
//          changeColors(clikcolor);
//           h1.style.background=pickedColor;

//     }else{
//     	this.style.background="#232323";
//     	messagedisplay.textContent="Try again!";
//     }
    

// });
// }

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




