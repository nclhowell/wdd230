//  function to pull in weather from openweathermap free API 
// const requestURL = "https://api.openweathermap.org/data/2.5/weather?q=San Diego,California&units=imperial&appid=efe08699ddd1c3e69ab9fb7992f15d2a";
const requestURL0 = "https://api.openweathermap.org/data/2.5/weather?q=Bethesda,Maryland&units=imperial&appid=efe08699ddd1c3e69ab9fb7992f15d2a";
// const cards = document.querySelector('.cards');
fetch(requestURL0)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
            // temporary checking for valid response and data parsing
            console.log(jsonObject);
            // document.querySelector('#weatherapitemp').innerHTML = `${jsonObject.main.temp}&deg; F`;
            const openweather = jsonObject['main'];
            const iconsrc = `https://openweathermap.org/img/w/${jsonObject.weather[0].icon}.png`;
            const desc0 = jsonObject.weather[0].description;
            const windspeed0 = jsonObject.wind.speed;
            const currenttemp = jsonObject.main.temp;

            // split the desc0 string into an array of strings 
            // whenever a blank space is encountered
            const words = desc0.split(" ");

            //  Calc wind chill if relevant which means the temp must be less than 50 and wind speed must be greater than 3 
            if (windspeed0 > 3 && currenttemp < 50) {
                let windchill = 35.74 + 0.6215 * currenttemp - 35.75 * (Math.pow(windspeed0, 0.16)) + .4275 * currenttemp * (Math.pow(windspeed0, 0.16))
                let formattedwindchill = windchill.toFixed(2);
                //  Insert results into DOM 
                document.querySelector("#windchill").innerHTML = `Wind Chill: ${formattedwindchill}&deg; F`;
                document.querySelector("#windspeed0").innerHTML = `${windspeed0} MPH`;
            } 

            else {
                document.querySelector("#windchill").innerHTML = `Wind Chill: N/A`;
            } 

                    // loop through each element of the array and capitalize the first letter.
                    for (var i = 0; i < words.length; i++) {
                        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
                    }
                    // Join all the elements of the weather description array back into a string 
                    // using a blankspace as a separator 
                    const desc = words.join(" ");

                    // Dom placement
                    document.querySelector('#weathericon').setAttribute('src', iconsrc);
                    document.querySelector('#weathericon').setAttribute('alt', desc);
                    // document.querySelector('figcaption').textContent = `Current Conditions are ${desc}`;
                });