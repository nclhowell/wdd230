//  function to pull in weather 
const requestURL = "https://api.openweathermap.org/data/2.5/weather?q=Fairbanks&units=imperial&APPID=efe08699ddd1c3e69ab9fb7992f15d2a";
// const cards = document.querySelector('.cards');
fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        // temporary checking for valid response and data parsing
        console.log(jsonObject);
        document.querySelector('#current-temp').textContent = jsonObject.main.temp;
        const openweather = jsonObject['main'];
        const iconsrc= `https://openweathermap.org/img/w/${jsonObject.weather[0].icon}.png`;
        const desc = jsonObject.weather[0].description;
        document.querySelector('#icon-src').textContent = iconsrc;
        document.querySelector('#weathericon').setAttribute('src', iconsrc);
        document.querySelector('#weathericon').setAttribute('alt', desc);
        document.querySelector('figcaption').textContent = desc;
       // prophets.forEach(displayProphets);
    });

const openweather = jsonObject['main'];

/*function displayProphets(prophet) {
    // Create elements to add to the document
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let portrait = document.createElement('img');
    let p = document.createElement('p');
    let porder = thrd(x);
    // Change the textContent property of the h2 element to contain the prophet's full name
    h2.textContent = `${prophet.name} ${prophet.lastname}`;
    p.textContent = `${prophet.name} ${prophet.lastname} was borne on ${prophet.birthdate} in the state of ${prophet.birthplace}`;

    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
    portrait.setAttribute('src', prophet.imageurl);
    portrait.setAttribute('alt', `Portait of ${prophet.name} ${prophet.lastname} - ${porder} Latter-day President`);
    portrait.setAttribute('loading', 'lazy');

    // Add/append the section(card) with the h2 element
    card.appendChild(h2);
    card.appendChild(portrait);
    card.appendChild(p);

    // Add/append the existing HTML div with the cards class with the section(card)
    cards.appendChild(card);
}*/
