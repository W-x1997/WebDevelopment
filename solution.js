//isEven

// function isEven(num){
// 	//return true if even
// 	if(num % 2 === 0) {
// 		return true;
// 	} 
// 	//return false otherwise
// 	else {
// 		return false
// 	}
// }

function isEven(num){
	return num % 2 === 0;
}

function factorial(num){
  //define a result variable
  var result = 1;
  //calculate factorial and store value in result
  for(var i = 2; i <= num; i++){
  	result *= i;
  }
  //return the result variable
  return result;
}

// factorial(4) 4 x 3 x 2 x 1


function kebabToSnake(str) {
	//replace all '-' with "_"'s
	var newStr = str.replace(/-/g , "_"); //在 ／ 与 ／g中间为替换内容
	//return str
	return newStr;

}


function printReverse(num){
   for(var k=num.length-1;i>=0;i--){
     console.log(num[k]);
   }

 }



// function isUniform(arr){
//    for(var i=0;i<arr.length-1;i++){
//     if(arr[i]!=arr[i+1])
//       return false;
//    }
//    return true;

// }


function isUniform(arr){
   var first=arr[0];
   arr.forEach(function(element){
     if(element!=first)
      return false;
   });
    

}



function sumArray(arr){
  var sum=0;
  arr.forEach(function(element){
    sum=sum+element;
  }); 
  return sum;
}

function max(arr){
 var max=0;
 arr.forEach(function(element){
  if(max<element)
    max=element;
 });

}


