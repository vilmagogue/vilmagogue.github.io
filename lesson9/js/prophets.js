const requestURL = 'https://byui-cit230.github.io/canvas-referenced/latter-day-prophets.json';
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const prophets = jsonObject['prophets'];
    for (let i = 0; i < prophets.length; i++ ) {

let card = document.createElement('section');
let h2 = document.createElement('h2');
let cardP1 = document.createElement('p');
let cardP2= document.createElement('p');
let card= document.createElement('p');
let image = document.createElement('img');

h2.textContent = prophets[i].name + ' ' + prophets[i].lastname;
cardP1.textContent ="Born:" + "" + prophets[i].birthdate;
cardP2.textContent ="Place:" + "" + prophets[i].birthdate;
image.setAttribute('src', prophets[i].imageurl);
image.setAttribute("alt", prophets[i].name + "" + prophets[i]. lastname + "" + "-" + "")


document.querySelector('div.cards').appendChild(card);
h2.textContent = prophets[i].name + ' ' + prophets[i].lastname;

card.appendChild(h2);
card.appendChild(h2);

document.querySelector('div.cards').appendChild(card);

    }
}); 