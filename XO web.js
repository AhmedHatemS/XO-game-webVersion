var value = "X", color = "green", flag = 1;
 
function jsfile(){
    if(flag == 2){
        value = "O"; color = "red"; flag = 1;
    }else if(flag == 1){
        value = "X"; color = "green"; flag = 2; 
    }
}

$(document).ready(function(){
    $("#card1").click(function(){
        document.getElementById("card1").innerHTML = value;
        document.getElementById("card1").style.backgroundColor = color;
     }); 
    $("#card2").click(function(){
        document.getElementById("card2").innerHTML = value;
        document.getElementById("card2").style.backgroundColor = color;
     });
    $("#card3").click(function(){
        document.getElementById("card3").innerHTML = value;
        document.getElementById("card3").style.backgroundColor = color;
     });
    $("#card4").click(function(){
        document.getElementById("card4").innerHTML = value;
        document.getElementById("card4").style.backgroundColor = color;
     }); 
    $("#card5").click(function(){
        document.getElementById("card5").innerHTML = value;
        document.getElementById("card5").style.backgroundColor = color;
     });
    $("#card6").click(function(){
        document.getElementById("card6").innerHTML = value;
        document.getElementById("card6").style.backgroundColor = color;
     });
    $("#card7").click(function(){
        document.getElementById("card7").innerHTML = value;
        document.getElementById("card7").style.backgroundColor = color;
     }); 
    $("#card8").click(function(){
        document.getElementById("card8").innerHTML = value;
        document.getElementById("card8").style.backgroundColor = color;
     });
    $("#card9").click(function(){
        document.getElementById("card9").innerHTML = value;
        document.getElementById("card9").style.backgroundColor = color;
     });
 });