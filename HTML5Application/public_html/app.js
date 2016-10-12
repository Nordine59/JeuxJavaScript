/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//
//alert ("coucou");
//
//
//console.log(numerique);
//
//var numerique = 1;
//var numerique2 = 1.5;
//var boolean = true;
//var texte = 'coucou';
//
//console.log(typeof(numerique));
//console.log(typeof(numerique2));
//console.log(boolean);
//console.log(texte);
//
//
//var texteEntre = prompt ('entrez du texte');
//
//var texteTronque = texteEntre.substring(10);
//console.log ('Resultat' + texteTronque);
//
//var texte = prompt ('entrez un texte');
//var recup = prompt("texte recherché")  ;
//alert(texte.indexOf(recup));
//
//
//var texte = prompt('entrez un texte');
//alert(texte.toUpperCase());
//
//var tab = ['coucou', 1,2,2.5,156];
//console.log(tab);
//
//var tab = ['coucou', 1,2,2.5,156];
//tab.push('Phoenix Marie');
//console.log(tab);
//
//var tab = ['coucou', 1,2,2.5,156];
//tab.pop();
//tab.pop();
//console.log(tab);
//
//var obj = {
//  
//  titre: 'Kun fu panda',
//  anneeProd : 2000,
//  nbLiens: 20,
//  realisateurs:[{nom:'Disney'},{nom:'Pixar'}],
//  affiche:function(){
//      
//  }
//}
//alert(obj.realisateurs[0].nom);// pour interroger un objet créé en amont, indice 0 pour reanom
//
//var obj = {
//  
//  titre: 'Kun fu panda',
//  anneeProd : 2000,
//  nbLiens: 20,
//  realisateurs:[{nom:'Disney'},{nom:'Pixar'}],
//  affiche:function(){
//  console.log(this.titre + "" +  this.anneeProd + "" +  this.nbLiens+ "" + this.realisateurs[0].nom);
//  }
//};
//obj.affiche();
//alert(obj.realisateurs[0].nom);
//
//
////var i = 0;
////
////var idInterval = setInterval((function(){
////  console.log(i);
////  i++;
////},1000);
//
//
//
//     function a(){   
//  
//  var texte = 'coucou';
//  a();
//  
//  
//  
//  var a = prompt("Entrez a");
//var b = prompt("Entrez b");
//
//if(a<b){
//  
// alert("<");
//}else if(b<a){
// alert (">");
//}else{
//  alert ("=");
//}
//}

var a;
var nbreSecret =Math.ceil(Math.random() * 100) ;

do {
     a = prompt ("veuillez entrer un nombre");
    if (a < nbreSecret) {
        alert("inférieur");
    } else if ( a > nbreSecret){
        alert("supérieur");
    }
} while (a != nbreSecret);
alert("Vous avez gagné");



