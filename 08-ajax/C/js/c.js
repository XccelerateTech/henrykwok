function whoIsInSpace(callback) {
    let http = new XMLHttpRequest;
    http.open('GET', `http://api.open-notify.org/astros.json`);

    http.onreadystatechange = function () {
        if(http.readyState != XMLHttpRequest.DONE) {
            return;
        } else if (http.status == 200) {
            let parseobj = JSON.parse(http.responseText)

            callback(parseobj.people.map(function(person) {
                return person.name;
            }))
        } else {
            console.log ('An error occurred: ' + http.status);
        }
    }
    http.send();
}

whoIsInSpace (function (data) {
    console.log (data);
})