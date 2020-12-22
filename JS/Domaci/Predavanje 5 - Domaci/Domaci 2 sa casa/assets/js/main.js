var n = 7;

function changeNumber(value, ind) {
	if ( value < 1 || value > 36 ) {
      $("#broj"+ind).val(1);
   }
}

function sacuvaj() {
	let brojevi = [];
	
	if ( checkRequiredAndInsertArray(brojevi) ) {
		$("#error").hide();

		if ( checkDoubleNumbers(brojevi) ) {
			$("#error").html("Postoje isti brojevi!").show();
		}
		else {
			console.log(sortArr(brojevi))
			$("#rezultat").html("Vasi brojevi su " + sortArr(brojevi)).show();
		}
	}
	else {
		$("#error").html("Svi brojevi moraju biti uneti!").show();
	}
}


function checkRequiredAndInsertArray(arr) {
	for(let i=0; i<n; i++) {
		let num = $("#broj"+i).val();
		if( num == "" ) {
			return false;
		}
		else {
			arr.push(num);
		}
	}
	
	return true;
}

function checkDoubleNumbers(arr) {
	
	let res = false;
	
	for ( let i=0; i < n; i++) {
		for( let j=i+1; j < n; j++) {
			if (arr[i] == arr[j]) {
				res = true;
				break;
			}
		}
	}
	
	return res;
}
function sortArr(niz) {

    let broj = 0;
	for ( let i=0; i < niz.length; i++) {
    	for (let j=0; j < niz.length; j++) {
         	if (niz[i] < niz[j]) {
            	broj = niz[i];
            	niz[i] = niz[j];
            	niz[j] = broj;
			}
		}
	}
return niz;
}

/*
myarray.sort(function(a,b){ //Array now becomes [7, 8, 25, 41] OVO JE KOD SA NETA KOJI RESAVA PROBLEM
    return a - b
})
*/