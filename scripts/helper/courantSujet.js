console.log("=>****courant Sujet");

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var courantSujetJson = JSON.parse(xhttp.responseText);

        var leMembre = new Vue({
            el: '#courantSujet',
            data: {
                courantSujet: courantSujetJson,
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
