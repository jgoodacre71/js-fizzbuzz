$(document).ready(function(){

	var fizzbval = prompt("Please enter an integer greater than zero");

	fizzbval = +fizzbval;
	
	if(typeof fizzbval==='number' && (fizzbval%1)===0 && (fizzbval>0)) {
		fizzbuzz(fizzbval);
	}
	else
	{
		alert("Sorry you need to enter an integer greater than zero")
	}
	

	function fizzbuzz(fbval) {
		var fizzbval = ""
		for (var i=1;i<=fbval;i++){
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
	}	

});