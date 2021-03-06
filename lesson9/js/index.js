const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const towns= jsonObject['townData'];
    for (let i = 0; i < towns.length; i++ ) {

let towns= document.createElement('section');
let h2 = document.createElement('h2');
let townP = document.createElement('p');
let image = document.createElement('img');

h2.textContent = towns[i].name + ' ' + towns[i].lastname;
townP.textContent ="motto:" + "" + towns[i].motto;
townP.textContent ="yearFounded:" + "" + towns[i].yearFounded;
townP.textContent ="currentPopulation:" + "" + towns[i].currentPopulation;
townP.textContent ="averageRainfall:" + "" + towns[i].averageRainfall;
townP.textContent ="Events:" + "" + towns[i].events;

image.setAttribute("alt", towns[i].name +  "")

document.querySelector('div.cards').appendChild(card);

    }
}); 