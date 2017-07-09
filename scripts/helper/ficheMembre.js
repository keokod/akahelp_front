console.log("=>fiche membre");

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        console.log(xhttp.responseText);
        var profilJson = JSON.parse(xhttp.responseText);
        console.log(profilJson);
        
        var leMembre = new Vue({
            el: '#ficheMembre',
            data: {
                profilMembre: profilJson,
            }
        })
    } 
};
xhttp.open("GET", "http://192.168.33.10:8000/profilMembre/2", true);
xhttp.send();