const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const towns = jsonObject['towns'];
        towns.forEach(towninfo => {
            let card = document.createElement('section');
            let h3 = document.createElement('h3');
            let h4 = document.createElement('h4');
            let years = document.createElement('div');

            let img = document.createElement('img');

            h3.textContent = `${towninfo.name}`;
            h4.textContent = `${towninfo.motto}`;
            years.textContent = `Year Founded: ${towninfo.yearFounded}`;

            img.setAttribute('src', towninfo.photo);
            img.setAttribute('alt', towninfo.name);

            card.appendChild(h3);
            card.appendChild(h4);
            card.appendChild(years);
            card.appendChild(img);

            document.querySelector('div.cards').appendChild(card);
        });
    });