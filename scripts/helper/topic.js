console.log("=>topic");

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        console.log(xhttp.responseText);
        var topicJson = JSON.parse(xhttp.responseText);
        console.log(topicJson);

        var leMembre = new Vue({
            el: '#elemTopic',
            data: {
                elemTopic: topicJson,
            }
        })
    } 
};
xhttp.open("GET", "http://192.168.33.10:8000/topic/1", true);
xhttp.send();
