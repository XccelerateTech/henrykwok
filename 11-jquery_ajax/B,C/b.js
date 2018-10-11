function informMe (endpoint, value){
    $.ajax({
        url:(`https://restcountries.eu/rest/v2/${endpoint}/${value}`),
        beforeSend: function(){},

        type: "GET",
        dataType: "json",
        data: {
            attr1: "name",
        },


    }).done(function(country){
        console.log('The function is run successfully');
        console.log(country);
    }).fail(function(country){
        console.log('The function cannot run.');
    }).always(function(data){
        console.log('I will always run.')
    });
};

informMe ('capital', 'Berlin');