/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function chargeJson() {
    $.getJSON("Json/films.json", function (data) {

        var tabFilms = data.films;
        alert("Nbre films:" + tabFilms.length);
        tabFilms.forEach(function (film) {
            //   on appele la tab avec son id #tabId et on append ds les cellules td ci dessous
            $('#tabid').append('<tr><td>' + film.id + '</td><td> ' + film.titre + '</td><td> ' + film.synopsis + '</td></tr>');
        });
    });
};
