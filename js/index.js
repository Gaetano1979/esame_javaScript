var on=document.getElementById('on');
var mas=document.getElementById('mas');
var igual=document.getElementById('igual');
var meno=document.getElementById('menos');
var por=document.getElementById('por');
var dividido=document.getElementById('dividido');
var punto=document.getElementById('punto');
var signo=document.getElementById('sign');

var cero=document.getElementById('0');
var uno=document.getElementById('1');
var due=document.getElementById('2');
var tre=document.getElementById('3');
var quatro=document.getElementById('4');
var cinque=document.getElementById('5');
var sei=document.getElementById('6');
var sette=document.getElementById('7');
var otto=document.getElementById('8');
var nove=document.getElementById('9');

var display=document.getElementById('display');

var summa=true;
var uguale=true;
var prova=true;

var valorSumma=0;
var valorMeno=0;
var valorPor=0;
var valorDiv=0;

var resultado=0;
var resultado1=0;
var somme=[];
var summaDisplay=[];

function bordiCon(selector){
  selector.style.border="0.5px solid transparent";
  if (selector.children[0]) {
    selector.children[0].style.border="inherit";
  }
}

function bordiSin(selector){
  selector.style.border="inherit";
  if (selector.children[0]) {
    selector.children[0].style.border="inherit";
  }
}

var Eventos={

  init:function(){
    var bottoni=document.getElementsByClassName('tecla');
    for (var i = 0; i < bottoni.length; i++) {
      bottoni[i].onmousedown=this.ConBorde;
      bottoni[i].onmouseup=this.SinBorde;
    }
    on.onclick=this.tastoOn;
    cero.onclick=this.tastoZero;
    uno.onclick=this.tastoUno;
    due.onclick=this.tastoDue;
    tre.onclick=this.tastoTre;
    quatro.onclick=this.tastoCuattro;
    cinque.onclick=this.tastoCinque;
    sei.onclick=this.tastoSei;
    sette.onclick=this.tastoSette;
    otto.onclick=this.tastoOtto;
    nove.onclick=this.tastoNove;
    punto.onclick=this.tastoPunto;
    signo.onclick=this.tastoMenoMas;
    mas.onclick=this.tastoMas;
    igual.onclick=this.tastoIgual;
    por.onclick=this.tastoPor;
    dividido.onclick=this.tastoDiv;
  },

  ConBorde:function(event){
    bordiCon(event.target);
  },

  SinBorde:function(event){
    bordiSin(event.target);
  },

  tastoIgual:function(){
    resultadoFinale=0;
    uguale=false;
    valoreUguale=parseFloat(display.innerHTML);
    summaDisplay.push(valoreUguale);
    console.log(valoreUguale);
    console.log(summaDisplay);
    if (valorSumma!=0) {
      var nuevoresultadoFinale=(valorSumma+valoreUguale).toString();
      resultadoFinale=nuevoresultadoFinale.substring(0,8);
    }else if (valorMeno!=0) {
      var nuevoresultadoFinale=(valorMeno-valoreUguale).toString();
      resultadoFinale=nuevoresultadoFinale.substring(0,8);
    }else if (valorPor!=0) {
      var nuevoresultadoFinale=(valorPor*valoreUguale).toString();
      resultadoFinale=nuevoresultadoFinale.substring(0,8);
    }else if (valorDiv!=0) {
      var nuevoresultadoFinale=(valorDiv/valoreUguale).toString();
      resultadoFinale=nuevoresultadoFinale.substring(0,8);
    }
    for (var i = 0; i < summaDisplay.length; i++) {
      resultado+=summaDisplay[i];
    }
    //display.innerHTML=resultado;
    display.innerHTML=resultadoFinale;
    console.log("El resultado es: "+resultado);
    summaDisplay.splice(0);

    for (var i = 0; i < summaDisplay.splice(0); i++) {
      resultado1+=summaDisplay[i];
    }
    console.log(summaDisplay);
    console.log("El resultado1 es: "+resultado1);
    if (resultado1==0) {
      resultado=resultado1
    }
    console.log("El resultado es: "+resultado);
  },

  tastoMas:function(){
    summa=false;
    valorSumma=parseFloat(display.innerHTML);
    somme.push(valorSumma);
    summaDisplay.push(valorSumma);
    console.log("El valor a summar será: "+valorSumma);
    display.innerHTML="";

  },

  tastoPor:function(){
    molti=false;
    valorPor=parseFloat(display.innerHTML);
    console.log("El valor a moltiplicar es: "+valorPor);
    display.innerHTML="";

  },

  tastoDiv:function(){
    dividi=false;
    valorDiv=parseFloat(display.innerHTML);
    console.log("El valor a dividere es: "+valorDiv);
    display.innerHTML="";

  },
  tastoMeno:function(){
    entre=false;
    valorMeno=parseFloat(display.innerHTML);
    summaDisplay.push(valorMeno);
    entres.push(valorMeno);
    console.log("El valor que sera meno es: "+valorMeno);
    display.innerHTML="";
  },

  tastoMenoMas:function(){
    var numero=display.innerHTML;
    display.innerHTML=parseInt(numero*(-1));
  },

  tastoPunto:function(){
    if (display.innerHTML.indexOf(".")== -1) {
      if (display.innerHTML== ""){
      display.innerHTML = display.innerHTML + "0.";
      } else {
      display.innerHTML = display.innerHTML + ".";
      }

      }
  },

  tastoOn:function(){
    if (display.innerHTML=="" || display.innerHTML==null){
      display.innerHTML=0;
    }else if(display.innerHTML!=0){
      display.innerHTML=0;
      resultadoFinale=0;
    }else if(display.innerHTML==0){
      display.innerHTML="";
    }
  },

  tastoZero:function(){
    cero=0;
    if (display.innerHTML.lenght=1 && display.innerHTML==0 ) {
      display.innerHTML=cero;

    }else if (display.innerHTML.length<8 ) {
    display.innerHTML+=cero;
  }

    console.log(parseFloat(display.innerHTML));
  },

  tastoUno:function(){
    uno=1;
    if (display.innerHTML==0 || summa==false || uguale==false) {
      display.innerHTML=uno;
      summa=true;
      uguale=true;
    }else if(display.innerHTML.length<8 ){
    display.innerHTML+=uno;
    }
    console.log(parseFloat(display.innerHTML));
  },

  tastoDue:function(){
    due=2;
    if (display.innerHTML==0 || summa==false || uguale==false) {
      display.innerHTML=due;
      summa=true;
      uguale=true;
    }else if(display.innerHTML.length<8){
    display.innerHTML+=due;
    }
    console.log(parseFloat(display.innerHTML));
  },

  tastoTre:function(){
    tre=3;
    if (display.innerHTML==0 || summa==false || uguale==false) {
      display.innerHTML=tre;
      summa=true;
      uguale=true;
    }else if(display.innerHTML.length<8){
    display.innerHTML+=tre;
    }
    console.log(parseInt(display.innerHTML));
  },

  tastoCuattro:function(){
    quatro=4;
    if (display.innerHTML==0 || summa==false || uguale==false) {
      display.innerHTML=quatro;
      summa=true;
      uguale=true;
    }else if(display.innerHTML.length<8){
    display.innerHTML+=quatro;
    }
    console.log(parseInt(display.innerHTML));
  },

  tastoCinque:function(){
    cinque=5;
    if (display.innerHTML==0 || summa==false || uguale==false) {
      display.innerHTML=cinque;
      summa=true;
      uguale=true;
    }else if(display.innerHTML.length<8){
    display.innerHTML+=cinque;
    }
    console.log(parseInt(display.innerHTML));
  },

  tastoSei:function(){
    sei=6;
    if (display.innerHTML==0 || summa==false || uguale==false) {
      display.innerHTML=sei;
      summa=true;
      uguale=true;
    }else if(display.innerHTML.length<8){
    display.innerHTML+=sei;
    }
    console.log(parseInt(display.innerHTML));
  },

  tastoSette:function(){
    sette=7;
    if (display.innerHTML==0 || summa==false || uguale==false) {
      display.innerHTML=sette;
      summa=true;
      uguale=true;
    }else if(display.innerHTML.length<8){
    display.innerHTML+=sette;
    }
    console.log(parseInt(display.innerHTML));
  },

  tastoOtto:function(){
    otto=8;
    if (display.innerHTML==0 || summa==false || uguale==false) {
      display.innerHTML=otto;
      summa=true;
      uguale=true;
    }else if(display.innerHTML.length<8){
    display.innerHTML+=otto;
    }
    console.log(parseInt(display.innerHTML));
  },

  tastoNove:function(){
    nove=9;
    if (display.innerHTML==0 || summa==false || uguale==false) {
      display.innerHTML=nove;
      summa=true;
      uguale=true;
    }else if(display.innerHTML.length<8){
    display.innerHTML+=nove;
    }
    console.log(parseInt(display.innerHTML));
  },

}

Eventos.init();
