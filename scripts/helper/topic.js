console.log("=>topic");
var idTopic = getUrlVars(); //récupération du paramètre 

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        console.log(xhttp.responseText);
        var topicJson = JSON.parse(xhttp.responseText);
       // sujetJons ="toto";

        var leMembre = new Vue({
            el: '#elemTopic',
            data: {
                elemTopic: topicJson,
                sujetCourant: "toto",
            }
        })
    } 
};

xhttp.open("GET", "http://192.168.33.10:8000/topic/"+idTopic.id, true);
xhttp.send();




xhttp.send();

  function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi,
      function(m, key, value) {
        vars[key] = value;
      });
    return vars;
  }