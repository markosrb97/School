var fontSize=16;
var text = $(".text");
function smanjiText() {
    let newTextSize = fontSize-2;
    if(newTextSize<8){
        newTextSize=8;
    }
    text.css('font-size', newTextSize);
    fontSize=newTextSize;
}
function povecajText() {
    let newTextSize = fontSize+2;
    if(newTextSize>136){
        newTextSize=136;
    }
    text.css('font-size', newTextSize);
    fontSize=newTextSize;
}
function normalText() {
    fontSize=16;
    text.css('font-size', fontSize);
}