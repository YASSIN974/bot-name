const Eris = require("eris");
var Relax = new Eris("token");
var Relax.on("ready", () => {
    console.log("tm");
    onstart();
});
Relax = "513483782943408149";
nick = "Relax";
function onstart(){
    var v1 = nick.split('');
    var counter;
    var i=0;
varAcura 2 = ' ';
  var Acura =   setInterval(function(){

     if (i == v1.length){
     clearInterval(Relax);
     onstart()
      return;
     }
     var v2 = v1[i];
   Acura  += v2;
    Acura.editNickname(Relax);
 
        i++;

     }, 1000);
}
Acura.connect();
