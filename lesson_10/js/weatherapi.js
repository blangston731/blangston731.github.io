const requestURL = 'http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID={APIKEY}';

fetch(requestURL)
    .then(function (response) {
        console.log(response);
        return response.json();
    })