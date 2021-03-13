const requestURL = 'https://byui-cit230.github.io/canvas-referenced/latter-day-prophets.json';
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
  //  console.table(jsonObject)//
   // temporary checking for valid response and data parsing//

   const prophets = jsonObject['prophets'];
// loop variables in the array//
   for (let i = 0; i < prophets.length; i++ ) {

    // declare - output of the declared  section//

    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let birthday = document.createElement('p');
    let birthPlace = document.createElement('p');
    let prophetPhoto = document.createElement('img');

    // set output string, set all attributes declared from HTML/card //
h2.textContent = prophets[i].name + " " + prophets[i].lastname;
birthday.textContent = "Date of Birth :" + " " + prophets[i].lastname;
birthPlace.textContent ="Place of Birth :" + " " + prophets[i].birthPlace;
prophetPhoto.setAttribute("src", prophets[i].imageurl);
prophetPhoto.setAttribute("alt", prophets[i].name + " " + prophets[i].lastname + " " + "");
prophetPhoto.style.width="200px";

card.append(h2);
card.appendChild(birthday);
card.appendChild(birthPlace);
card.append(prophetPhoto);
document.querySelector("div.cards").appendChild(card);
   }
});
  
