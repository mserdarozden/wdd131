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

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});
  
const temples = [
  {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
      templeName: "Laie Hawaii Temple",
      location: "Laie, Hawaii, United States",
      dedicated: "1919, November, 27",
      area: 34566,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/laie-hawaii/400x250/laie-temple-775369-wallpaper.jpg"
  },
  {
      templeName: "Taipei Taiwan Temple",
      location: "Taipei, Taipei, Taiwan",
      dedicated: "1984, November, 17",
      area: 56474,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/taipei-taiwan/400x250/taipei-taiwan-temple-lds-1031625-wallpaper.jpg"
  },
  {
      templeName: "Sacramento California Temple",
      location: "Rancho Cordova, California, United States",
      dedicated: "2006, September, 3",
      area: 116442,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/sacramento-california/400x250/sacramento-temple-769989-wallpaper.jpg"
  },
];

function createTempleCard(temple) {
  const card = document.createElement('div');
  card.classList.add('card');

  const name = document.createElement('h2');
  name.textContent = temple.templeName;
  card.appendChild(name);

  const location = document.createElement('p');
  location.innerHTML = `<strong>Location:</strong> ${temple.location}`;
  card.appendChild(location);

  const dedicated = document.createElement('p');
  dedicated.innerHTML = `<strong>Dedicated:</strong> ${temple.dedicated}`;
  card.appendChild(dedicated);

  const area = document.createElement('p');
  area.innerHTML = `<strong>Size:</strong> ${temple.area} sq ft`;
  card.appendChild(area);

  const image = document.createElement('img');
  image.src = temple.imageUrl;
  image.alt = `${temple.templeName} Temple`;
  image.loading = 'lazy';
  card.appendChild(image);

  return card;
}

function displayTemples(filter) {
  const templeCardsContainer = document.getElementById('templeCardsContainer');
  templeCardsContainer.innerHTML = '';

  let filteredTemples = temples;

  if (filter === 'old') {
      filteredTemples = temples.filter(temple => parseInt(temple.dedicated.split(', ')[0]) < 1900);
  } else if (filter === 'new') {
      filteredTemples = temples.filter(temple => parseInt(temple.dedicated.split(', ')[0]) >= 2000);
  } else if (filter === 'large') {
      filteredTemples = temples.filter(temple => temple.area > 90000);
  } else if (filter === 'small') {
      filteredTemples = temples.filter(temple => temple.area < 10000);
  }

  filteredTemples.forEach(temple => {
      const templeCard = createTempleCard(temple);
      templeCardsContainer.appendChild(templeCard);
  });
}

document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', (event) => {
      event.preventDefault();
      const filter = event.target.getAttribute('data-filter');
      displayTemples(filter);
  });
});

// Display all temples by default
displayTemples('all');