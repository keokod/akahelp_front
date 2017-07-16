//before returning its module definition.
define(function () {
    console.log("************ COMMUN ************");
    reqAjax("http://192.168.33.10:8000/sujet");

});

function reqAjax(url, isParam) {

    url = getUrlVars().id ? url + "/" + getUrlVars().id : url; //s'il y a paramettre on demande la requête avec le parametère sinon on ne modifie pas url

    console.log("requete ajax ==>" + url);
    console.log(getUrlVars().id);

    //requete ajax
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var dataJson = JSON.parse(xhttp.responseText);
            console.log(dataJson);
            var leMembre = new Vue({
                el: '#topic',
                data: {
                    topic: dataJson,
                }
            });
        }
    };

    xhttp.open("GET", url, true);
    xhttp.send();
}

function paramUrl(url) {

}

//récupération du parametre url GET
function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi,
        function (m, key, value) {
            vars[key] = value;
        });
    return vars;
}