console.log("=>listeMembre")  ;

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        var userJson = JSON.parse(xhttp.responseText);
        console.log(userJson);
        var appTitre = new Vue({
          el: '#listeMembre',
          data: {
            users: userJson,
            racineSite: 'http://192.168.33.10:8000',

          }
        })
      }
    };
    xhttp.open("GET", "http://192.168.33.10:8000/liste_membre", true);
    xhttp.send();