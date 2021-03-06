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

<section>
    <h2>Soda Springs</h2>
    <p>Motto : Historic Oregon Trail Oasis. The soda is on Us</p>
    <p>Year Founded : 1858</p>
    <p>Current Population : 2985</p>
    <p>Average Rainfall : 15.75</p>
    <p>Events : February 29 : Geyser Song Day </p>
    <p>May 1 - 6 : Days of May Celebration</p>
    <p>October 15 -16 : OctoberFest</p>
    <img src="images/sodaSprings.jpeg" alt="Soda Springs -2">

</section>

