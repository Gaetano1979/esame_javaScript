var cero=document.getElementById('0');
var uno=document.getElementById('1');
var due=document.getElementById('2');
var tre=document.getElementById('3');
var quatro=document.getElementById('4');

var display=document.getElementById('display');
/*function imprimere(){
  cero=0;
  //console.log(Number(0));
  console.log(cero);
  display.innerHTML=cero;
}
cero.onclick=imprimere;*/
var numeros=[0,1,2,3,4,5,6,7,8,9];


function Cero(){
  cero=1;
  display.innerHTML=cero;
  console.log(cero);

}
cero.onclick=Cero;

function functionName() {
  cero=0;
  console.log(cero);
}

cero.onclick=functionName;




function bordeTrasparente(elemento){

  elemento.style.border="solid 0.5px transparent";

  if (elemento.children[0]) {
    elemento.children[0].style.border = "inherit";

  }
}
function sinborde(elemento){
  elemento.style.border="inherit";
  if (elemento.children[0]) {
    elemento.children[0].style.border = "inherit";

  }
}


var Eventos={
init: function(){
  var bottone=document.getElementsByClassName('tecla');
  for (var i = 0; i < bottone.length; i++) {
    bottone[i].onmouseover=this.bordetras;
    bottone[i].onmouseleave=this.sin;
    }
    cero.onclick=this.imprimere;
  },
  bordetras: function(event){
    bordeTrasparente(event.target);
  },
  sin: function(event){
    sinborde(event.target);
  },
  imprimere: function(event){
    functionName(event.target);
  }
}




Eventos.init();