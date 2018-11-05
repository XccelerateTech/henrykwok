var http = new XMLHttpRequest();

http.open('GET', './data/file.json');

http.onreadystatechange = function () {
    if (http.readyState != XMLHttpRequest.DONE) {
        return;
    } else if (http.status == 200) {
        console.log (http.responseText);
    } else {
        console.log ('error occured' + http.status);
    }
}

http.send();