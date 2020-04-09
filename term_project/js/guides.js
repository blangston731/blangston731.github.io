requestURL = "https://blangston731.github.io/json_file/guides.html";

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const guide = jsonObject['guides'];

        guide.forEach(guides => {
            let slot = document.createElement('section');
            let h2 = document.createElement('h2');
            let birth = document.createElement('p');
            let cert = document.createElement('p');
            let gemail = document.createElement('p');
            let story = document.createElement('p');

            let imgurl = document.createElement('img');

            h2.textContent = `${guide.name}`;
            birth.textContent = `${guide.birthday}`;
            cert.textContent = `${guide.certification}`;
            gemail.textContent = `${guide.email}`;
            story.textContent = `${guide.bio}`;

            img.setAttribute('src', guide.imageurl);
            img.setAttribute('alt', fullName);

            slot.appendChild(h2);
            slot.appendChild(birth);
            slot.appendChild(cert);
            slot.appendChild(gemail);
            slot.appendChild(story);
            slot.appendChild(img);


            document.querySelector('div.slots').appendChild(slot);


        });
    });