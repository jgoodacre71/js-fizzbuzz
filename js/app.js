$(document).ready(function(){

	var fizzbval = "TEST";
	for (var i=1;i<=100;i++){

		if (i%15==0){
			fizzbval = "fizz buzz";
		} 
		else if (i%3==0){
			fizzbval = "fizz";
		} 
		else if (i%5==0){
			fizzbval = "buzz";
		}
		else {
			fizzbval = i;
		}
		$("<p>"+fizzbval+"</p>").appendTo("body");

	}

});