//create the function (takes three input parameter)

function informME (endpoint, value, callback) {

    var http = new XMLHttpRequest();

    http.open('GET', `https://restcountries.eu/rest/v2/${endpoint}/${value}`);

    http.onreadystatechange = function () {
        if (http.readyState != XMLHttpRequest.DONE) {
            return;
        } else if (http.status == 200) {
            callback(http.responseText);
        } else {
            console.log ('error occured' + http.status);
        }
    }

    http.send();

}

informME ('capital', 'Berlin', function (callback){
    console.log (JSON.parse(callback))
});
