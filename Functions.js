//function with parametar
/*function getMilk (money){
    var Bottle = Math.floor(money/1.5);
    alert("Buy "+Bottle+" Bottle of Milk. cost is ₹ "+Bottle*1.5);
}
getMilk(8);*/

//Math.random();
function loveScore(){

prompt("Enter your Name");
prompt("Enter your Patner Name");
var n = Math.random();
score = Math.floor(n*100)+1;
document.getElementById("score").innerHTML = score+"%";
}
