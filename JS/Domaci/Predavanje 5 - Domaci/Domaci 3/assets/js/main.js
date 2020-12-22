var choose = $("#choose");
var paragrafi = $("#paragrafi");

$(document).ready(function() {
    choose.change(function(){
        let value = choose.val();
        let htmlPoruka = "";
        switch(value){
            case "1":
                htmlPoruka = "";
                break;
            case "2":
                htmlPoruka = "<p class='paragraf'>Ovo je tema i tekst o sportu</p>";
                break;
            case "3":
                htmlPoruka = "<p class='paragraf'>Ovo je tema i tekst o vestima</p>";
                break;
            case "4":
                htmlPoruka = "<p class='paragraf'>Ovo je tema i tekst o kulturi</p>";
                break;
            case "5":
                htmlPoruka = "<p class='paragraf'>Ovo je tema i tekst o zabavi</p>";
                break;
            case "6":
                htmlPoruka = "<p class='paragraf'>Ovo je tema i tekst o magazinima</p>";
                break;
            case "7":
                htmlPoruka = "<p class='paragraf'>Ovo je tema i tekst o politici</p>";
                break;
        }
        paragrafi.html(htmlPoruka);
    })
})

