var btn = $("#btn");
$(document).ready(function() {
    btn.click(function() {
        var br1 = 0, br2 = 0, br3 = 0, br4 = 0, br5 = 0, br6 = 0;
        for (let i = 1; i <= 1000; i++ ) {
           var broj = Math.floor((Math.random() * 6) + 1);
           switch (broj) {
                case 1:
                   br1++;
                   break;
                case 2:
                   br2++;
                   break;
                case 3:
                   br3++;
                   break;
                case 4:
                   br4++;
                   break;
                case 5:
                   br5++;
                   break;
                case 6:
                   br6++;
                   break;      
            }
        }
        $("#br1").html("<p id='b1'>Broj 1 je pao: " + br1 + "</p>");
        $("#br2").html("<p id='b1'>Broj 2 je pao: " + br2 + "</p>");
        $("#br3").html("<p id='b1'>Broj 3 je pao: " + br3 + "</p>");
        $("#br4").html("<p id='b1'>Broj 4 je pao: " + br4 + "</p>");
        $("#br5").html("<p id='b1'>Broj 5 je pao: " + br5 + "</p>");
        $("#br6").html("<p id='b1'>Broj 6 je pao: " + br6 + "</p>");
    })
})