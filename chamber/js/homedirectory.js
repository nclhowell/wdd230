// Display the Grid by default, then wait for user to choose Grid or List
gridfunction();


// Display the Grid
function gridfunction() {
    document.querySelector(".gnar").innerHTML = "";
    // document.getElementById("viewtag").innerHTML = "";
    // const requestURL = "https://nclhowell.github.io/wdd230/chamber/data/showcaseriders.json";
    const requestURL = "data/showcaseriders.json";
    const gnarcards = document.querySelector('.grid-boxes');
    fetch(requestURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (jsonObject) {
            // temporary checking for valid response and data parsing
            console.log(jsonObject);
            const rider = jsonObject['rider'];
            rider.forEach(displayGnar);
        });

    function displayGnar(rider) {
        // Create elements to add to the document
        let gnarcard = document.createElement('section');
        gnarcard.setAttribute("class", "box");
        gnarcard.setAttribute("id", "spot6");
       //gnarcard.setAttribute("background-color", "#274156");
       // gnarcard.setAttribute("color", "blue");
        // section.setAttribute('class', "dir");
        let h1 = document.createElement('h1');
        let h2 = document.createElement('h2');
        let portrait = document.createElement('img');
        let p = document.createElement('p');
        // Change the textContent property of the h2 element to contain the rider's full name
        h1.innerHTML = `${rider.name}`;
        // h2.innerHTML = `${rider.address}<br>${rider.phone}`;
        p.textContent = `${rider.pitch}`;

        // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
        portrait.setAttribute('src', rider.logo);
        portrait.setAttribute('alt', `rider`);
        portrait.setAttribute('loading', 'lazy');
        //portrait.setAttribute('max-height', '80%');
        //portrait.setAttribute('max-width', '80%');

        // Add/append the section(gnarcard) with the h2 element
        gnarcard.appendChild(portrait);
        gnarcard.appendChild(h1);
        gnarcard.appendChild(h2);
        gnarcard.appendChild(p);

        // Add/append the existing HTML div with the gnarcards class with the section(gnarcard)
        gnarcards.appendChild(gnarcard);
    }

    return null;
}
