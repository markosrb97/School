// variables
var brojA = $("#broj_a");
var brojB = $("#broj_b");
var operacija = $("#operacija");
var responseMsg = $(".response-msg");
var res = $("#res");

// jQuery
$(document).ready(function() {
	
});

// functions
function izracunaj() {
	let num_a = parseInt(brojA.val());
	let num_b = parseInt(brojB.val());
	let oper = parseInt(operacija.val());
	
	if ( _validationData(num_a, num_b, oper) ) {
		responseMsg.html("");
		
		res.html(_calculator(num_a, num_b, oper));
	}
	else {
		res.html("");
		responseMsg.html("Moraju da se unesu sva obavezna polja");
	}
}

function _validationData(num_a, num_b, oper) {
	let validation = true;
	
	if ( isNaN(num_a) || isNaN(num_b) || isNaN(oper) )
		validation = false;
	
	return validation;
}

function _calculator(num_a, num_b, oper) {
	let res = 0;
	
	switch ( oper ) {
		case 1: res = num_a + num_b;
				break;
		case 2: res = num_a - num_b;
				break;
		case 3: res = num_a * num_b;
				break;
		case 4: res = num_a / num_b;
				break;
	}
	
	return res;
}







