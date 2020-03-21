const apiURL = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=669794a2364d1c99a3fc675b67354b5c';

fetch(apiURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsObject) {
        const fiveDays = jsObject.list.filter(x => x.dt_txt.includes('18:00:00'));
        console.log(fiveDays);
        for (let i = 0; i < fiveDays.length; i++) {
            document.getElementById(`temp${i+1}`).textContent = fiveDays[i].main.temp;
            const imagesrc = 'https://openweathermap.org/img/w/' + fiveDays[i].weather[0].icon + '.png';
            const desc = fiveDays[i].weather[0].description;
            document.getElementById(`icon${i+1}`).setAttribute('src', imagesrc);
            document.getElementById(`icon${i+1}`).setAttribute('alt', desc);
        }

        document.getElementById('current').textContent = fiveDays[0].weather[0].description;

        document.getElementById('speed').textContent = fiveDays[0].wind.speed;

        document.getElementById('humid').textContent = fiveDays[0].main.humidity;
    });

