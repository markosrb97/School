
// variables
var arrImages = ["1.jpg", "2.jpg", "3.jpg", "4.jpg"]; // api
var choose = $("#choose");
var res = $("#res");
var selBox = "<option value=''>Izaberi</option>";

for (let i=0; i < arrImages.length; i++) {
	selBox += "<option value='"+arrImages[i]+"'>Item "+(i+1)+"</option>";
}

choose.html(selBox);

$(document).ready(function() {
	choose.change(function() {
		let value = choose.val();
		let html_msg = "";
		
		if ( value === "" ) {
			html_msg = "<p>Niste izabrali nijednu sliku</p>";
		}
		else {
			html_msg = "<img src='assets/images/"+value+"' width='200' />";
		}
		
		res.html(html_msg);
	});
});

function changeNumber(value) {
	
	if ( value < 1 || value > 10 ) 
		$("#broj").val(1);
}

function formiraj() {
	let broj = $("#broj").val();
	let btns = "";
	
	for (let i=0; i < broj ; i++) {
		btns += "<button type='button' class='btn' id='item_"+i+"' onclick='selectItem("+i+")'>Item "+(i+1)+"</button>";
	}
	
	$("#btns").html(btns);
}

function selectItem(item) {
	$(".btn").removeClass('active');
	$("#item_"+item).addClass('active');
	
	$("#selected").html("Item "+(item+1));
}