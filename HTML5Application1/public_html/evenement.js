function clicButton(){
    
  var divTitre = document.getElementById("titre");
  
  divTitre.innerHTML = "Et qu'est ce qu'on dit ?!";
    
    var liste = document.getElementsByClassName("menu");
    
   for(i=0;i<liste.length;i++){
       
       var tag = liste[i];
       
       tag.innerHTML = "Merci Jacquie et Michel !";
   }
}


function clicButton2(){
    
    var texteEntree = document.getElementById("texte");
    
    var divTitre = document.getElementById("titre");
    
    
   divTitre.innerHTML = texteEntree.value.toUpperCase();
    
    
    
}








