const requestURL = 'https://byui-cit230.github.io/canvas-referenced/latter-day-prophets.json';
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    //test if the array of prophets will show using console.log//
  
    //set output location//

    const cards = document.querySelector(".cards");

     const prophets = jsonObject['prophets'];
     prophets.forEach(prophet=> {
    //create section/memory in js; not on HTML page//
let card = document.createElement('section');
let h2 = document.createElement('h2');
let pImg = document.createElement('Img');


    //use template literals//
    h2.innerHTML ="${prophet.name} <span style='color:white'> ${prophet.lastname}</span>";
    pImg.setAttribute("src", prophet.imageURL);
    pImg.setAttribute("alt", 'Images of ${prophet.name} who was born in ${prophet.birthplace} in the year ${prophet.birthdate}!')
    card.append(h2);
    cards.append(card);

     });
    });
        
        