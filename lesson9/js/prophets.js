const requestURL = 'https://byui-cit230.github.io/canvas-referenced/latter-day-prophets.json';
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    //console.table//
        const prophets = jsonObject['prophets'];
//output//
        const cards = document.querrySelector('.cards')
        prophets.forEach(prophet =>{

        


let card = document.createElement('section');
let h2 = document.createElement('h2');
let p = document.createElement('p');
let image = document.createElement('img');

h2.textContent = '${prophets.name}  ${prophets.lastname}';
p.textContent = '${prophets.birthdate} ${prophet.birthplace}';
p.textContent ="birthPlace:" + "" + prophets[i].birthPlace;
image.setAttribute('src', '${prophets.imageurl}');



card.append(h2);
card. appendChild(p);
card.appendChild(image);
card.append(card);



    });
}); 

