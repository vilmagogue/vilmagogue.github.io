
const images = document.querySelectorAll("[data-src]");

function preloadImage(img) {
  const src = img.getAttribute("data-src");
  if (!src) {
    return;
  }

  img.src = src;
  img.removeAttribute("data-src");
}

const imgOptions = {
  threshold: 1,
  rootMargin: "0px 0px 200px 0px",
};

const imgObserver = new IntersectionObserver((entries, imgObserver) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      preloadImage(entry.target);
      imgObserver.unobserve(entry.target);
    }
  });
}, imgOptions);

images.forEach((image) => {
  imgObserver.observe(image);
});


/* ============= Brother Blazzar function for range rating==============*/
function adjustRating(rating) {
  document.getElementById("ratingvalue").innerHTML = rating;
}

/* ============= cards code for home page ========================*/
/* Display the individual town data with the motto, year founded, population, and annual rainfall.*/
// set the JSON source URL
const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
        //console.table(jsonObject);  // temporary checking for valid response and data parsing
        const towns = jsonObject['towns'];

        const cards = document.querySelector(".cards")
        // select output location
        towns.forEach( town => {
          let divText = document.createElement("div");
          let card = document.createElement("section");
          let h2 = document.createElement("h2");
          let h5 = document.createElement("h5");
          let p2 = document.createElement("p");
          let p3 = document.createElement("p");
          let p4 = document.createElement("p");
          let townimg = document.createElement("img");
          
          if (town.name == "Preston" || town.name == "Fish Haven" || town.name == "Soda Springs") {
            // template literals
            h2.textContent = `${town.name}`;
            h2.style.margin = '2px 0'
            h5.textContent = `${town.motto}`;
            h5.style.margin = '2px 0';
            p2.textContent = `Year Founded: ${town.yearFounded}`;
            p3.textContent = `Population: ${town.population}`;
            p4.textContent = `Annual Rain Fall: ${town.averageRainfall}`;
            pMargin = '1rem 0 0 0' // variable to hold margin of paragraphs
            p2.style.margin = '2rem 0 0 0'
            p3.style.margin = pMargin
            p4.style.margin = pMargin
            divText.setAttribute('class', "content");

            townimg.setAttribute('src' , `images/${town.photo}`);
            townimg.setAttribute("alt", `Prophet ${town.name} photo`);
            townimg.setAttribute("loading", "lazy")
            townimg.style.boxShadow = '0 0 30px #333';
            townimg.style.width = '200px';
            

            divText.append(h2);
            divText.append(h5);
            divText.append(p2);
            divText.append(p3);
            divText.append(p4);
            card.append(divText);
            card.append(townimg);
            cards.append(card);
          }

          function addingOdds(altVariable){
            divText.setAttribute('class', "data");
            if(altVariable%2==0){
                townimg.setAttribute('class', "derecha");
                divText.setAttribute('class', "data2");
            }
          }

      });

      

  });

