// var age=prompt("Please enter your age:");
// var time=age*365*24;
// alert("You have been alive for"+time+"hours!!!");


// var myage=21;
// var show="Please guess my age!!";
// alert(show);
// var guess=Number(prompt("Please Guess:"));
// if(guess<myage){
//   console.log("Too low!");
// }else if(guess>myage){
// 	console.log("Too high!");
// }else{
// 		console.log("You got it!");
// }

// var button=document.querySelector("button");
// var isPurple=false;

// button.addEventListener("click",function(){
// 	if(isPurple){
// 		document.body.style.background="white";
//         isPurple=false;
// 	}else{
// 		document.body.style.background="purple";
// 			isPurple=true;
// 	}
// });

var button=document.querySelector("button");
var isPurple=false;

button.addEventListener("click",function(){
	document.body.classList.toggle("purple");
});

