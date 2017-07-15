console.log("=>liste Sujet");

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        console.log(xhttp.responseText);
        var sujetJson = JSON.parse(xhttp.responseText);
        console.log(sujetJson);

        var leMembre = new Vue({
            el: '#listeSujet',
            data: {
                listeSujet: sujetJson,
                dossierCourant: dossierCourant(),
            }
        })
    }
};

xhttp.open("GET", "http://192.168.33.10:8000/liste_sujet", true);
xhttp.send();

function dossierCourant() {
    var CheminComplet = document.location.href;
    var CheminRepertoire = CheminComplet.substring(0, CheminComplet.lastIndexOf("/"));
    return CheminRepertoire;
}