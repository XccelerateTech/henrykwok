$(function(){

    $('#form').submit(function(input){
        input.preventDefault();

        let long=$('input[name=lng]').val();  
        let lat=$('input[name=lat]').val();

        $.ajax(`https://api.sunrise-sunset.org/json?lat=${lat}&lng=${long}&formatted=0`).done(function(data){

        console.log(data)

        let sunrise = Date.parse(new Date(data.results.sunrise))
        let sunset = Date.parse(new Date(data.results.sunset))
        let nowtime = Date.parse(new Date());

        console.log(sunrise);
        console.log(sunset)
        console.log(nowtime);

        /* console.log('The time difference in sunrise between yesterday and sunrise is '+sunrise)
        console.log('Sunset is at '+sunset) */

        

        

        });
    });
});

