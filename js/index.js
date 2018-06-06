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

var Eventos={

  init:function(){
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
  },

  tastoMenoMas:function(){
    var numero=display.innerHTML;
    display.innerHTML=parseInt(numero*(-1));
  },
//deve terminar el metodo Punto
  tastoPunto:function(){
    var numero=display.innerHTML;
    if (display.innerHTML==0) {
      display.innerHTML=0+".";
    }else if(display.innerHTML!=0){
      display.innerHTML=(numero+".");
    }
  },

  tastoOn:function(){
    if (display.innerHTML=="" || display.innerHTML==null){
      display.innerHTML=0;
    }else if(display.innerHTML.length>0){
      display.innerHTML=0;
    }else if(display.innerHTML==0){
      display.innerHTML="";
    }
  },

  tastoZero:function(){
    cero=0;
    if (display.innerHTML==0) {
      display.innerHTML=cero;
    }else if (display.innerHTML.length<8 ) {
    display.innerHTML+=cero;
    }
    console.log(display.innerHTML);
  },

  tastoUno:function(){
    uno=1;
    if (display.innerHTML==0) {
      display.innerHTML=uno;
    }else if(display.innerHTML.length<8 ){
    display.innerHTML+=uno;
    }
    console.log(display.innerHTML);
  },

  tastoDue:function(){
    due=2;
    if (display.innerHTML==0) {
      display.innerHTML=due;
    }else if(display.innerHTML.length<8){
    display.innerHTML+=due;
    }
    console.log(display.innerHTML);
  },

  tastoTre:function(){
    tre=3;
    if (display.innerHTML==0) {
      display.innerHTML=tre;
    }else if(display.innerHTML.length<8){
    display.innerHTML+=tre;
    }
    console.log(display.innerHTML);

  },

  tastoCuattro:function(){
    quatro=4;
    if (display.innerHTML==0) {
      display.innerHTML=quatro;
    }else if(display.innerHTML.length<8){
    display.innerHTML+=quatro;
    }
    console.log(display.innerHTML);
  },

  tastoCinque:function(){
    cinque=5;
    if (display.innerHTML==0) {
      display.innerHTML=cinque;
    }else if(display.innerHTML.length<8){
    display.innerHTML+=cinque;
    }
    console.log(display.innerHTML);
  },

  tastoSei:function(){
    sei=6;
    if (display.innerHTML==0) {
      display.innerHTML=sei;
    }else if(display.innerHTML.length<8){
    display.innerHTML+=sei;
    }
    console.log(display.innerHTML);
  },

  tastoSette:function(){
    sette=7;
    if (display.innerHTML==0) {
      display.innerHTML=sette;
    }else if(display.innerHTML.length<8){
    display.innerHTML+=sette;
    }
    console.log(display.innerHTML);
  },

  tastoOtto:function(){
    otto=8;
    if (display.innerHTML==0) {
      display.innerHTML=otto;
    }else if(display.innerHTML.length<8){
    display.innerHTML+=otto;
    }
    console.log(display.innerHTML);
  },

  tastoNove:function(){
    nove=9;
    if (display.innerHTML==0) {
      display.innerHTML=nove;
    }else if(display.innerHTML.length<8){
    display.innerHTML+=nove;
    }
    console.log(display.innerHTML);
  },



}

Eventos.init();
