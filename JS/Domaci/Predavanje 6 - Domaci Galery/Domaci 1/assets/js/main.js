var thumbAlbum = ["1.png","2.png","3.png","4.png","5.png","6.png","7.png","8.png","9.png","10.png","11.png","12.png","13.png","14.png","15.png","16.png"];
var imagesThumb = "";
var gallery = $("#gallery");

for (let i=0; i < thumbAlbum.length; i++) {
	imagesThumb += "<div class='item'><a href='#' onclick='openWin("+(i+1)+")'><img src='assets/images/thumb/"+thumbAlbum[i]+"' lajkovano='false' img-name='"+(i+1)+".png' id='img"+(i+1)+"'/></a><img src='assets/images/srce.svg' class='srce' id='not-liked"+(i+1)+"' onclick='like("+(i+1)+")'/><img src='assets/images/srce-like.svg' class='srce-like' id='liked"+(i+1)+"' onclick='unLike("+(i+1)+")'/></div>";
}

gallery.html(imagesThumb);

function like(val){
	$("#not-liked"+val).hide(150)
	$("#liked"+val).show(150)
	if($("#img"+val).attr("img-name") == $("#big"+val).attr("img-name")){
	$(".srce-big").attr("slika",val+".png").hide(150)
	$(".srce-big-like").attr("slika",val+".png").show(150)
	}
	$("#img"+val).attr("lajkovano","true")

}
function unLike(val){
	$("#not-liked"+val).show(150)
	$("#liked"+val).hide(150)
	if($("#img"+val).attr("img-name") == $("#big"+val).attr("img-name")){
	$(".srce-big").attr("slika",val+".png").show(150)
	$(".srce-big-like").attr("slika",val+".png").hide(150)
	}
	$("#img"+val).attr("lajkovano","false")
}
function closeWin() {
	let preview = $(".preview")
	preview.css("display","none")
}
function openWin(val) {
	let imgName = $("#img"+val).attr("img-name");
	let likeInfo = $("#img"+val).attr("lajkovano")
	let box = $(".left-side")
	let preview = $(".preview")
	box.html("<button class='dugme' type='button' onclick='closeWin()'>Close</button> <img src='assets/images/original/"+imgName+"' id='big"+val+"' img-name='"+val+".png' class='big-img' />")
	if(likeInfo == "false"){
		box.append("<img src='assets/images/srce.svg' class='srce-big' slika='"+imgName+"' onclick='like("+val+")'></img>  <img src='assets/images/srce-like.svg' class='srce-big-like' slika='"+imgName+"' style='display: none;' onclick='unLike("+val+")'></img>")
	}
	else {
		box.append("<img src='assets/images/srce-like.svg' class='srce-big-like' slika='"+imgName+"' onclick='unLike("+val+")'></img>  <img src='assets/images/srce.svg' class='srce-big' slika='"+imgName+"' style='display: none;' onclick='like("+val+")'></img>")
	}
	preview.css("display","flex")


}
