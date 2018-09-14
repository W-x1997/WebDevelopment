//Check off Specfic Todos By clicking
// $("li").click(function(){
// 	if($(this).css("color")==="rgb(128,128,128)"){
// 		$(this).css({
// 			color:"black",
// 			textDecoration:"none"
// 		});
// 	}else{
//            $(this).css({
// 			color:"gray",
// 			textDecoration:"line-through"
// 		});

// 	}
	
// });
$("li").click(function(){
$(this).toggleClass("completed");	
	
});


//click on X to delete Todo
$("span").click(function(){
	alert("hhh");
});