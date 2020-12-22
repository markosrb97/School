// variables
var positionId = 1;
var lastImage = "4.jpg";
var positionLastImage = 4;
var firstImage = "1.jpg";
var positionFirstImage = 1;

// jQuery
$(document).keydown(function(e) {
	switch ( e.keyCode ) {
		case 39 : nextImage();
				  break;
		case 37:  prevImage();
				  break;
	}
});

// functions
function openImage(img_name, pos_id) {
	let link_to_image = "assets/images/gallery/big/" + img_name;
	positionId = pos_id;
	
	$(".item").removeClass('active-border');
	$(".item_" + pos_id).addClass('active-border');
	
	$(".preview-image").attr('src', link_to_image);
}

function prevImage() {
	let img_name = lastImage;
	let pos_id = positionLastImage;
	
	if ( positionId > positionFirstImage ) {
		positionId--;
		img_name = $(".item_"+positionId).attr('img_name');
		pos_id = positionId;
	}
	
	openImage(img_name, pos_id);
}

function nextImage() {
	let img_name = firstImage;
	let pos_id = positionFirstImage;
	
	if ( positionId < positionLastImage ) {
		positionId++;
		img_name = $(".item_"+positionId).attr('img_name');
		pos_id = positionId;
	}
	
	openImage(img_name, pos_id);
}







