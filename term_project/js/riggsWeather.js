//const apiURL = 'http://api.openweathermap.org/data/2.5/weather?lat=45&lon=-116&units=imperial&APPID=669794a2364d1c99a3fc675b67354b5c';
const apiURL = 'http://api.openweathermap.org/data/2.5/weather?id=5600363&units=imperial&APPID=669794a2364d1c99a3fc675b67354b5c';


fetch(apiURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsObject) {
        
        console.log(jsObject);

        document.getElementById('temp').textContent = jsObject.coord[0].main[0] ;

        document.getElementById('speed').textContent = ;

        document.getElementById('humid').textContent = ;
    });