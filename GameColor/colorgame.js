

var colors=[
   "rgb(255, 0, 0)",
 
  "rgb(255, 255, 0)",
 
  "rgb(0, 255, 0)",
 
  "rgb(0, 255, 255)",
 
  "rgb(0, 0, 255)",
 
  "rgb(255, 0, 255)"
];



var squares=document.querySelectorAll(".square");
var pickedColor=colors[1];
var colordisplay=document.getElementById("colordisplay");


 colordisplay.textContent=pickedColor;


for(var i=0;i<squares.length;i++){

	squares[i].style.background=colors[i];

	squares[i].addEventListener("click",function(){
    var clikcolor=this.style.background;
    if(clikcolor === pickedColor){
    	alert("Correct!")
    }else{
    	alert("Wrong!");
    }
    

});
}



