$(function(){

    $('#form').on('submit', function(e){
        e.preventDefault();

        //serialize the data from the form 
        let lngLatData = $('#form').serialize();
        console.log(lngLatData);

        //set the day of yesterday and tomorrow
        let oldDay = new Date(new Date().getTime() - 86400*1000);
        
        let nextDay = new Date(new Date().getTime() + 86400*1000);
        
        
        //callback function 
        callApi(new Date(), lngLatData, today => {
            callApi(oldDay, lngLatData, yesterday => {
                callApi(nextDay, lngLatData, tomorrow => {

                    //construct a new array calling from api for today, yesterday and tomorrow
                    let sunrisesTime = [new Date(today.sunrise), new Date(tomorrow.sunrise), new Date(yesterday.sunrise)];
                    let sunsetTime = [new Date(today.sunset), new Date(tomorrow.sunset), new Date(yesterday.sunset)];
                    let now = new Date();

                    //compare the time difference between sunrise/sunset
                    let nextSunrise = sunrisesTime.find(function(sunrise){
                        return (sunrise - now) > 0;
                    })
                    
                    let nextSunset = sunsetTime.find(function(sunset){
                        return (sunset - now) > 0;
                    })

                    let pastSunrises = sunrisesTime.filter(function(sunrise){
                        return (now - sunrise) > 0;
                    }).sort().reverse();
                    
                    let pastSunset = sunsetTime.filter(function(sunset){
                        return (now - sunset) > 0;
                    }).sort().reverse();

                    let previousSunrise = pastSunrises[0];
                    let previousSunset = pastSunset[0];

                    $('#times').append("The time difference between previous sunrise and now is "+ toHHMMSS(now-previousSunrise - 86400*1000)+'<br/>');

                    $('#times').append("The time difference between previous sunset and now is "+ toHHMMSS(now-previousSunset)+'<br/>');

                    $('#times').append("The time difference between next sunrise and now is "+ toHHMMSS(nextSunrise-now)+'<br/>');

                    $('#times').append("The time difference between next sunset and now is "+ toHHMMSS(nextSunset-now )+'<br/>');

                })
                  
            })

        })
    })



    //function of calling the api
    function callApi(date, latLng, cb){
        $.ajax({
            type: 'GET',
            url: (`https://api.sunrise-sunset.org/json?${latLng}&date=${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}&formatted=0`),
            dataType: 'json',
        }).done(function(response){
            cb(response.results);
            console.log(response.results);
        }).fail(function(err){
            console.log('error'+ err)
        });
    }

    function toHHMMSS(milliseconds){
        let seconds = milliseconds / 1000;
        let hoursDisplayed = Math.floor(seconds/3600)+"";
        
        let minuteDisplayed = Math.floor(seconds % 3600 /60)+"";
        
        let secondsDisplayed = (seconds % 60).toFixed(0)+"";
        //change the result into correct format
        return `${hoursDisplayed.padStart(2,'0')}:${minuteDisplayed.padStart(2,'0')}:${secondsDisplayed.padStart(2,'0')}`;
    }


//Ex F: Compare the HK with the input
//Add a event listen into the button
    $('#btn').on('click', function(e){
        e.preventDefault();

        callApi(new Date(), $('#form').serialize(), inputPlace => {
            callApi (new Date(), 'lat=22.25&lng=114.1666666', hongKong => {

                let hongKongDiff = new Date (hongKong.sunset) - new Date(hongKong.sunrise);
                let inputPlaceDiff = new Date (inputPlace.sunset) - new Date(inputPlace.sunrise);

                if (inputPlaceDiff > hongKongDiff) {
                    alert ('Your input has longer day than HK')
                } else {
                    alert('Your input has a shorter day than HK')
                };
                
            });
        });
    });
});

