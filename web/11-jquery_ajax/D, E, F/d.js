$(function(){

    $('#form').submit(function(input){
        input.preventDefault();

        let long=$('input[name=lng]').val();  
        let lat=$('input[name=lat]').val();

        $.ajax(`https://api.sunrise-sunset.org/json?lat=${lat}&lng=${long}&formatted=0`).done(function(data){

        console.log(data)

        let sunrise = new Date(data.results.sunrise)
        let sunset = new Date(data.results.sunset)

        console.log('Sunrise is at '+sunrise)
        console.log('Sunset is at '+sunset)

        });
    });
});