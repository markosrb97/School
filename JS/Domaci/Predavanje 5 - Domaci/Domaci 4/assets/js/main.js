var bojaPozadine = $("#BojaPozadine"),bojaBordera = $("#BojaBordera"),velicinaKruga = $("#VelicinaKruga"),velicinaBordera = $("#VelicinaBordera"),krug = $("#krug");
function border() {
	let backgroundColor = bojaPozadine.val();
	let circleSize = velicinaKruga.val();
	let sirinaBordera = velicinaBordera.val();
	let borderColor = bojaBordera.val();
	krug.css({"width": circleSize,"height": circleSize,"background-color":backgroundColor,"border":sirinaBordera +' solid ' + borderColor});
}