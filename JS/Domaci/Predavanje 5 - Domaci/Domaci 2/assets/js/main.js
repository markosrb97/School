var brojevi = [1,1,1,1,1,1,1];

function changeNumber(value) {
	
	if ( value < 1 || value > 36 ) {
      $("#broj0").val(1);
      $("#broj1").val(1);
      $("#broj2").val(1);
      $("#broj3").val(1);
      $("#broj4").val(1);
      $("#broj5").val(1);
      $("#broj6").val(1);
   }
}

function sacuvaj() {
   console.log(brojevi.length);
   var duzina =brojevi.length
   for(let i=0; i<duzina; i++) {
      brojevi[i] = $("#broj"+i).val()
   }
   for ( let i=0; i<brojevi.length; i++) {
      for( let j=i+1; j<brojevi.length; j++)
         if (brojevi[i]==brojevi[j]) {
            $("#error").show();
            $("#rezultat").hide();
         }
         else{ 
            $("#error").hide();
            $("#rezultat").show();
            $("#rezultat").html("Vasi brojevi su: "+ brojevi);
         }}
}


