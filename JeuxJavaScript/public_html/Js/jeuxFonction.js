
var lancerPlateau
compteur = 0;
clic1 = undefined;
clic2 = undefined;

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
}




function afficheTableau(saisie) {

    var ggg = "";
    ggg = '<tr>';
    var tab = [];

    for (i = 0; i < saisie / 2; i++) {
        tab.push(i);
        tab.push(i);
    }
    //randomize tab
    var tab = randomize(tab);
    //affiche tab
    for (var i = 0; i < saisie; i++) {
        ggg += '<td id="' + i + '"><input type="button" couleur="' + tab[i] + '"/></td>';
        if (i + 1 === saisie / 2) {
            ggg += '</tr><tr>';
        }
    }
    ggg += '</tr>';
    $('.caca').append(ggg);
    $('input').on("click", clickElem);





}

function randomize(tab) {
    restab = [];
    while (tab.length != 0) {// premier tableau
        var elemRecup = tab.splice(Math.floor(Math.random() * tab.length), 1);
        
        restab.push(elemRecup);

    }

    return restab;
}

var clickElem = function (event) {

    if (clic1 === undefined) {
        //afficher l'élément
        clic1 = event.target;
        var pisse = $(clic1).attr('couleur')
        $(clic1).attr('value', pisse);

    } else if (clic2 === undefined) {
        //afficher l'élément
        clic2 = event.target;
        var crotte = $(clic2).attr('couleur')
        $(clic2).attr('value', crotte);


        // $('input').attr('value','culotte sale');
        compteur++;
    } else {
        //désafficher les éléments et affecter le nouveau
        if ($(clic1).attr("couleur") === $(clic2).attr("couleur")) {
            $(clic1).toggle();
            $(clic2).toggle();
        } else {
            $(clic1).attr('value', ''); // ici je veux les remettre à normal car la valeur ne peut pas bouger
            $(clic2).attr('value', '');


        }

        clic1 = undefined;
        clic2 = undefined;
    }
}