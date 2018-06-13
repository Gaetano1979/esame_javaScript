var costante=0;
var prova=true;

var tasti={
  display:document.getElementById('display'),
  on:document.getElementById('on'),
  signo:document.getElementById('sign'),
  uguale:document.getElementById('igual'),
  piu:document.getElementById('mas'),
  meno:document.getElementById('menos'),
  per:document.getElementById('por'),
  divisione:document.getElementById('dividido'),
  punto:document.getElementById('punto'),
  uno:document.getElementById('1'),
  due:document.getElementById('2'),
  tre:document.getElementById('3'),
  quatro:document.getElementById('4'),
  cinque:document.getElementById('5'),
  sei:document.getElementById('6'),
  sette:document.getElementById('7'),
  otto:document.getElementById('8'),
  nove:document.getElementById('9'),
}

var funzioni={
  display:function(valore){
    tasti.display.innerHTML
  },
  bordiCon:function(selector){
    selector.style.transform="scale(0.95)";
    if (selector.children[0]) {
      selector.children[0].style.border="inherit";
    }
  },
  bordiSin:function(selector){
    selector.style.transform="inherit";
    if (selector.children[0]) {
      selector.children[0].style.border="inherit";
    }
  },
  assignaValore:function(selector){
    if (selector.id!=null && selector.id.length<2 ) {
      if (tasti.display.innerHTML==0 && prova==true|| costante==1) {
        costante=0;
        tasti.display.innerHTML=selector.id;
        prova=false;
      }else if (tasti.display.innerHTML.length<8 && prova==false) {
        tasti.display.innerHTML+=selector.id;
      }
    }
    console.log(parseFloat(selector.id));
  },
  envioValoredisplay:function(arreglo){
    var dato=parseFloat(tasti.display.innerHTML);
    arreglo.push(dato);
    console.log("Abbiamo inviato "+dato+" al Arreglo "+arreglo);
  },
  lunghezza:function(valore){
    var resultado=0;
    var mensaje=" El Valore no tiene ningun elemento";
    var Lunghezza=valore.length;
    if (Lunghezza>0) {
      for (var i = 0; i < valore.length; i++) {
        resultado+=valore[i];
      }
      return "El resultado es: "+resultado;
    }else{
      return mensaje;
    }
  },
}

var arregli={
  piu:[],
  meno:[],
  per:[],
  divisione:[],
  valoredisplay:[],
}

var Eventos={

  init:function(){
    var bottoni=document.getElementsByClassName('tecla');
    for (var i = 0; i < bottoni.length; i++) {
      bottoni[i].onmousedown=this.Bordi;
      bottoni[i].onmouseup=this.SinBordes;
      bottoni[i].onclick=this.Valore;
    }
    tasti.on.onclick=this.tastiFunzioni.tastoOn;
    tasti.punto.onclick=this.tastiFunzioni.tastoPunto;
    tasti.signo.onclick=this.tastiFunzioni.tastoMenoMas;
    tasti.uguale.onclick=this.tastiFunzioni.tastoUguale;
    tasti.piu.onclick=this.tastiFunzioni.tastoMas;
    tasti.meno.onclick=this.tastiFunzioni.tastoMeno;
    tasti.per.onclick=this.tastiFunzioni.tastoPer;
    tasti.divisione.onclick=this.tastiFunzioni.tastoDividir;
  },
  Valore:function(event){
    funzioni.assignaValore(event.target);
  },
  Bordi:function(event){
    funzioni.bordiCon(event.target);
  },
  SinBordes:function(event){
    funzioni.bordiSin(event.target);
  },
  tastiFunzioni:{
    tastoUguale:function(){
      var resultado=0;
      funzioni.envioValoredisplay(arregli.valoredisplay);
      if (arregli.piu.length>0) {
        for (var i = 0; i < arregli.piu.length; i++) {
          resultado+=arregli.piu[i]
        }
        console.log("La somma del arregli.piu es: "+resultado);
        var nuovo=(parseFloat(tasti.display.innerHTML)+parseFloat(resultado)).toString();
        //tasti.display.innerHTML=parseFloat(tasti.display.innerHTML)+parseFloat(resultado);
        tasti.display.innerHTML=nuovo.substring(0,8);
        arregli.piu.splice(0);

      }else if (arregli.meno.length>0) {
        resultado=arregli.meno[0];
        for (var i = 1; i < arregli.meno.length; i++) {
          resultado-=arregli.meno[i];
        }
        console.log("Estamos usando el Arrglo Meno");
        console.log("El resultado es: "+resultado);
        var nuovo=(parseFloat(resultado)-(tasti.display.innerHTML)).toString();
        tasti.display.innerHTML=nuovo.substring(0,8);
        //tasti.display.innerHTML=parseFloat(resultado)-(tasti.display.innerHTML)
        arregli.meno.splice(0);
        console.log(arregli.meno);
      }else if (arregli.per.length>0) {
        resultado=arregli.per[0];
        for (var i = 1; i < arregli.per.length; i++) {
          resultado=resultado*arregli.per[i]
        }
        console.log("Usiamo Arreglo Por");
        console.log(arregli.per);
        console.log(resultado);
        var nuovo=(parseFloat(resultado)*(tasti.display.innerHTML)).toString();
        tasti.display.innerHTML=nuovo.substring(0,8);
        //tasti.display.innerHTML=parseFloat(resultado)*(tasti.display.innerHTML)
        arregli.per.splice(0);
      }else if (arregli.divisione.length>0) {
        resultado=arregli.divisione[0]
        for (var i = 1; i < arregli.divisione.length; i++) {
          resultado=resultado / arregli.divisione[i];
        }
        console.log("Usiamo el Arreglo dividir");
        console.log("El resultado es: "+resultado);
        console.log(arregli.divisione);
        var nuovo=(parseFloat(resultado)/(tasti.display.innerHTML)).toString();
        tasti.display.innerHTML=nuovo.substring(0,8);
        //tasti.display.innerHTML=parseFloat(resultado)/(tasti.display.innerHTML)
        arregli.divisione.splice(0);
      }
      costante=1;
      console.log("costante: "+costante);
      arregli.valoredisplay.splice(0);
    },
    tastoOn:function(){
      if (display.innerHTML=="" || display.innerHTML==null){
        display.innerHTML=0;
      }else if(display.innerHTML!=0){
        display.innerHTML=0;
      }else if(display.innerHTML==0){
        display.innerHTML="";
      }
    },
    tastoMas:function(){
      funzioni.envioValoredisplay(arregli.piu);
      tasti.display.innerHTML="";
      console.log("Tasto Mas");
    },
    tastoMeno:function(){
      funzioni.envioValoredisplay(arregli.meno);
      tasti.display.innerHTML="";
      console.log("Tasto Meno");
    },
    tastoPer:function(){
      funzioni.envioValoredisplay(arregli.per);
      tasti.display.innerHTML="";
      console.log("Tasto Per");
    },
    tastoDividir:function(){
      funzioni.envioValoredisplay(arregli.divisione);
      tasti.display.innerHTML="";
      console.log("Tasto Divisione");
    },
    tastoMenoMas:function(){
      var numero=display.innerHTML;
      display.innerHTML=parseInt(numero*(-1));
    },
    tastoPunto:function(){
      prova=false;
      if (display.innerHTML.indexOf(".")== -1) {
        if (display.innerHTML== ""){
        display.innerHTML="0."+display.innerHTML;
        } else {
        display.innerHTML = display.innerHTML + ".";
        }
      }
    },
  }
}
Eventos.init();
