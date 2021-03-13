/* ============= cards code for home page ========================*/
/* Display the individual town data with the motto, year founded, population, and annual rainfall.*/
// set the JSON source URL
const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';


fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
  //  console.table(jsonObject)//
   // temporary checking for valid response and data parsing//

   const prophets = jsonObject['prophets'];
// loop variables in the array//
   for (let i = 0; i < towns.length; i++ ) {

    // declare - output of the declared  section//

    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let motto = document.createElement('p');
    let yearFounded = document.createElement('p');
    let currentPopulation = document.createElement("p");
    let annualRainfall = document.createElement("p")
    let townPhoto = document.createElement('img');

    // set output string, set all attributes declared from HTML/card //
h2.textContent = town[i].name + " " + towns[i].name;
motto.textContent = "motto :" + " " + towns[i].motto;
yearFounded.textContent ="yearFounded :" + " " + towns[i].yearFounded;
currentPopulation = "currentPopulation :" + " " + towns[i].currentPopulation;
averageRainfall = "averageRainfall :" + " " + towns[i].averageRainfall;


townPhoto.setAttribute('src' , `images/${town.photo}`);
            townPhoto.setAttribute("alt", `town ${town.name} photo`);
            townPhoto.setAttribute("loading", "lazy")
            townPhoto.style.boxShadow = '0 0 30px #333';
            townPhoto.style.width = '200px';

card.append(h2);
card.appendChild(name);
card.appendChild(motto);
card.append(yearFounded);
card.append(currentPopulation);
card.append(averageRainful);
document.querySelector("div.cards").appendChild(card);
   }
});
  
