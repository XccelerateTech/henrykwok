class User {
    constructor (options) {
        this.first = options.name.first;
        this.last = options.name.last;
        this.email = options.email;
        this.dob = options.dob;
    }
}

function randomuser() {
    let http = new XMLHttpRequest;
    http.open('GET', `https://randomuser.me/api/?results=5`);

    http.onreadystatechange = function () {
        if(http.readyState != XMLHttpRequest.DONE) {
            return;
        } else if (http.status == 200) {
            let parseobj = JSON.parse(http.responseText)
                
            let people = parseobj.results.map(function(peopleuser) {
                return new User(peopleuser); 
            }); 
                console.log(people);
            
        } else {
            console.log ('An error occurred: ' + http.status);
        }
    }
    http.send();
}

randomuser();