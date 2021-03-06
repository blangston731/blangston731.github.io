const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const prophets = jsonObject['prophets'];
        prophets.forEach(prophet => {
            let card = document.createElement('section');
            let h2 = document.createElement('h2');
            let birth = document.createElement('p');
            let birthplace = document.createElement('p');
            let order = document.createElement('p');
            let service = document.createElement('p');
            let children = document.createElement('p');
            let death = document.createElement('p');

            let img = document.createElement('img');

            let fullName = `${prophet.name} ${prophet.lastname}`;

            h2.textContent = fullName;
            birth.textContent = `Date of Birth: ${prophet.birthdate}`;
            birthplace.textContent = `Place of Birth: ${prophet.birthplace}`;
            order.textContent = `Prophet number: ${prophet.order}`;
            service.textContent = `Years served as Prophet: ${prophet.length}`;
            children.textContent = `Number of Children: ${prophet.numofchildren}`;
            death.textContent = `Date of Death: ${prophet.death}`;

            img.setAttribute('src', prophet.imageurl);
            img.setAttribute('alt', fullName);

            card.appendChild(h2);
            card.appendChild(birth);
            card.appendChild(birthplace);
            card.appendChild(death);
            card.appendChild(order);
            card.appendChild(service);
            card.appendChild(children);
            card.appendChild(img);


            document.querySelector('div.cards').appendChild(card);


        });
    });