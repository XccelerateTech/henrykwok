function informME (endpoint, value) {
    $.get(`https://restcountries.eu/rest/v2/${endpoint}/${value}`,
        /* {
            attr1:'value1',
        } */
    ).done(function(country){
        console.log('The function is run successfully');
        console.log(country);
    }).fail(function(country){
        console.log('The function cannot run.');
    }).always(function(data){
        console.log('I will always run.')
    });
}