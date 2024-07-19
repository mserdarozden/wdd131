function getCurrentYear() {
    return new Date().getFullYear();
  }
  
  function getLastModified() {
    return new Date(document.lastModified).toLocaleString();
  }
  
  document.addEventListener('DOMContentLoaded', (event) => {
    const currentYearElement = document.getElementById('currentYear');
    const lastModifiedElement = document.getElementById('lastModified');
    
    if (currentYearElement) {
      currentYearElement.textContent = getCurrentYear();
    }
    
    if (lastModifiedElement) {
      lastModifiedElement.textContent = getLastModified();
    }
    
  });

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.ham-nav');
let isMoved = false;

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');

  const weatherContainer = document.getElementById('weather');

  if (isMoved) {
    weatherContainer.style.top = '10px';
} else {
    weatherContainer.style.top = '225px';
}

isMoved = !isMoved; 
});
  
const places = [
  {
      name: "Library of Celsus",
      imageUrl: "https://cdn.goturkiye.com/goturkey/ephesus-exploring-an-ancient-city-3.png",
      url: "library-of-celcus.html"
  },
  {
      name: "The Ancient Theater",
      imageUrl: "https://cdn.goturkiye.com/goturkey/ephesus-exploring-an-ancient-city-4.png",
      url: "ancient-theater.html"
  },
  {
      name: "The Odeon",
      imageUrl: "https://cdn.goturkiye.com/goturkey/ephesus-exploring-an-ancient-city-5.png",
      url: "the-odeon.html"
  },
  {
      name: "Temple of Hadrian",
      imageUrl: "https://cdn.goturkiye.com/goturkey/ephesus-exploring-an-ancient-city-6.png",
      url: "temple-of-hadrian.html"
  },
  {
      name: "Sebastoi Temple",
      imageUrl: "https://cdn.goturkiye.com/goturkey/ephesus-exploring-an-ancient-city-7.png",
      url: "sebastoi-temple.html"
  },
  {
      name: "Aqueducts",
      imageUrl: "https://cdn.goturkiye.com/goturkey/ephesus-exploring-an-ancient-city-8.png",
      url: "aqueducts.html"
  },
  {
      name: "Agoras",
      imageUrl: "https://cdn.goturkiye.com/goturkey/ephesus-exploring-an-ancient-city-9.png",
      url: "agoras.html"
  },
  {
      name: "Basilica of St. John",
      imageUrl: "https://cdn.goturkiye.com/goturkey/ephesus-exploring-an-ancient-city-10.png",
      url: "basilica-of-st-john.html"
  },
];

function createPlaceCard(place) {
  const card = document.createElement('a');
  card.classList.add('card');
  card.href = place.url;

  const name = document.createElement('h2');
  name.textContent = place.name;
  card.appendChild(name);

  const image = document.createElement('img');
  image.src = place.imageUrl;
  image.alt = `${place.name}`;
  image.loading = 'lazy';
  card.appendChild(image);

  return card;
}

const discoverCardsContainer = document.getElementById('discoverCardsContainer');

places.forEach(place => {
  const placeCard = createPlaceCard(place);
  discoverCardsContainer.appendChild(placeCard);
});
