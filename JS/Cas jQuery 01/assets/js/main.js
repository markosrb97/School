
// variables
var btn = $("#btn");
var btn_vanilla = document.getElementById('btn');
var myText = $(".my-text");

var pass = $("#pass");
var showHideLink = $("#show_hide_link");

$(document).ready(function() {
	btn.click(function() {
		btn.html("Kliknuto")
			.css('background-color', 'red')
			.css('font-size', '20px');
		//btn_vanilla.innerHTML = "Kliknuto";
	})
});

// vanilla js
/*function clickMe() {
	alert("dsds")
}*/

function showHideText() {
	let disp = myText.css('display');
	
	// ECMA 2016
	// const res = disp == "none" ? myText.css('display', 'block') : myText.css('display', 'none')
	
	if ( disp == "none" ) {
		//myText.css('display', 'block');
		//myText.show();
		//myText.fadeIn(500);
		myText.slideDown(500);
	}
	else {
		//myText.css('display', 'none');
		//myText.hide();
		//myText.fadeOut(500);
		myText.slideUp(500);
	}
}

function showHidePassword() {
	let type = pass.attr('type');
	
	if ( type === "password" ) {
		pass.attr('type', 'text');
		showHideLink.html('hide');
	}
	else {
		pass.attr('type', 'password');
		showHideLink.html('show');
	}
}