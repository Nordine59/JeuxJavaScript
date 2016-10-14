
var lancerPlateau

function pair(chiffre) {
    chiffre = parseInt(chiffre);
    return ((chiffre & 1) == '0') ? true : false;
}
function chargePlateau() {
    do {
        saisie = prompt("Veuillez saisir un nombre pair pour lancer le plateau");
    } while (pair(saisie) != true);

    alert("Nombre de case pair vérifié ****** ****** Le jeu va commencer");
    afficheTableau(saisie);
    remplirCase(saisie);
}
function afficheTableau(saisie) {
    
    var ggg = "";
    ggg = '<tr>';
    var tab =[];
    
    for(i=0;i<saisie/2;i++){
        
        tab.push(i);
         tab.push(i);
        
    }
    
    
    for (var i = 0; i < saisie; i++) {
        ggg += '<td id="' + i + '"><input type="button" couleur="' +  tab[i]  + '"/></td>';
        if (i + 1 == saisie / 2) {
            ggg += '</tr><tr>';
        }
    }
    ggg += '</tr>';
    $('.caca').append(ggg);
} 


