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
$("ul").on("click","li",function(){
$(this).toggleClass("completed");	
	
});


//click on X to delete Todo
$("ul").on("click","span",function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	
		event.stopPropagation() 
	}	);


$("input[type='text']").keypress(function(event){
	if(event.which ===13){
		var todoText=$(this).val();
		$(this).val("");
        $('ul').append("<li><span>X</span> "+todoText+"</li>");  

	}
});




// $("ul").click(function(){
// 	alert("ul");
// });


// $("#container").click(function(){
// 	alert("container");
// });

// $("body").click(function(){
// 	alert("body");
// });