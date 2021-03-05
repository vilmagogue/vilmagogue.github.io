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
let cardP = document.createElement('p');
let image = document.createElement('img');

h2.textContent = prophets[i].name + ' ' + prophets[i].lastname;
cardP.textContent ="Born:" + "" + prophets[i].birthdate;
cardP.textContent ="Place:" + "" + prophets[i].birthplace;

image.setAttribute("alt", prophets[i].name + "" + prophets[i]. lastname + "" + "-" + "")

document.querySelector('div.cards').appendChild(card);

    }
}); 