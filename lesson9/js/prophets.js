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
let p = document.createElement('p');
let img= document.createElement('img');

h2.textContent = prophets[i].name + ' ' + prophets[i].lastname;
p.textContent ="birthDate:" + "" + prophets[i].birthdate;
p.textContent ="birthPlace:" + "" + prophets[i].birthPlace;
img.setAttribute('src', prophets[i].imageurl);
img.setAttribute("alt", prophets[i].name + "" + prophets[i]. lastname + "" + "-" + "" + prophets[i].order);


card.append(h2);
card. appendChild(bday);
card.appendChild(bPlace);
card.append(image);

document.querySelector('div.cards').appendChild(card);

    }
}); 

