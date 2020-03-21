const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const towns = jsonObject['towns'];
        console.log(towns);
        if (towns.name == "Soda Springs") {
            const allevents = towns.events;
            console.log(allevents);
            for(let i=0; i < allevents.length; i++){
                document.getElementById(fhevents).textContent = allevents[i];
            }
        }
    });