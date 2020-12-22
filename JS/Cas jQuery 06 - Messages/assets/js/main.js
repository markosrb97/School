// variables
var max = 300
var message = $('.message')
var lengMess = $("#leng-mess")
var chat = $("#chat");

// jQuery
$(document).keydown(function(e) {
	let key = e.keyCode;
	
	if ( key == 13 ) sendMessage()
});

// functions
function enterMessage() {
	let len = message.val().length;
	
	lengMess.html(max-len)
}

function sendMessage() {
	let mess = message.val().trim();
	
	if ( mess == "" ) {
		alert("Morate upisati poruku!");
	}
	else {
		let mess_html = "<div class='msg'><h5>"+$(".username").html()+"</h5><p>"+mess+"</p></div>";
		
		chat.append(mess_html);
		message.val("");
	}
}






