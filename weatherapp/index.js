import axios from 'axios';

$(document).on('keyup', '.searchWeather', function(){

    let city = $('.searchWeather').val();
    console.log(city);


    let request = axios.get("http://api.wunderground.com/api/456615f4c4b28b63/forecast10day/q/CA/" + city + ".json");
    
    request.then(function(response){
        console.log(response.data);
        // let cityName = 

        let days = response.data.forecast.simpleforecast.forecastday;    
        
        days.forEach(function(day) {
            let dayElement = $('<div>');
            dayElement.addClass('col-12');
            let date = `${day.date.day} ${day.date.monthname} ${day.date.year}`;
            let highTemp = day.high.celsius;
            let lowTemp = day.low.celsius;
            dayElement.text(`Date: ${date}, High: ${highTemp}, Low: ${lowTemp}`);
            $('.days').append(dayElement);  
        });
    });

});











