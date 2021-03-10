const requestURL = 'https://byui-cit230.github.io/canvas-referenced/latter-day-prophets.json';
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const prophets = jsonObject['prophets'];
    //test if the array of prophets will show using console.log//
  
    //set output location//

    const cards = document.querySelector(".cards");

prophets.forEach(prophet => {prophet = {name: "Joseph", lastname: 'Smith', birthplace: 'Utah'}

});
     const utah = jdocument.querSelector('.utah');
     const utahfilter = prophets.filter(x => x.birthplace == 'Utah');
//create section in js file not at HTML file//
   utahfilter.forEach(utahprophet => {
let card = document.createElement('section');
let h2 = document.createElement('h2');
let pImg = document.createElement('Img');


    //use template literals//
    h2.textContent ='${utahprophet.name} ${utahprophet.lastname}';
    pImg.setAttribute('src', utahprophet.imageURL);
    pImg.setAttribute('alt', 'Images of ${utahprophet.name} who was born in ${utahprophet.birthplace} in the year ${utahprophet.birthdate.substring(utahprophet.birthpdate.lenght-4)}!')
    pImg.style.boxshadow ='0 0 30px #777';
    pImg.style.width='200px';
    
    
    card.append(h2);
    utah.append(cards);
    card.append(pImg)
     });


    });
        
        