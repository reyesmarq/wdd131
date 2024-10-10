Array.prototype.render = function (fn) {
  return this.map(fn).join(",").replace(/\,/g, "").toString();
};

const temples = [
  {
    templeName: "San Salvador, El Salvador",
    location: "San Salvador, El Salvador",
    dedicated: "2011, August, 21",
    area: 264254,
    imageUrl: "./images/san_salvador_el_salvador_temple.jpeg",
  },
  {
    templeName: "Lima Peru",
    location: "Lima, Peru",
    dedicated: "2024, January, 14",
    area: 960141,
    imageUrl: "./images/lima_peru_los_olivos_temple_exterior.jpeg",
  },
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg",
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg",
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg",
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg",
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg",
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg",
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg",
  },
  // Add more temple objects here...
];

document.getElementById("navHamburger").addEventListener("click", function () {
  document.querySelector(".nav .nav__menu").classList.toggle("show");
});

const TemplesContainer = document.getElementById("templesContainer");
const templeCardMapper = (temple) => {
  const { templeName, location, dedicated, area, imageUrl } = temple;
  return `
    <div class="card">
      <figure class="card__figure">
        <img class="card__image" src="${imageUrl}" alt="${templeName}">
        <figcaption class="thumbnail">${templeName}</figcaption>
        <figcaption class="sub-thumbnail">Location: ${location}</figcaption>
        <figcaption class="sub-thumbnail">Dedicated: ${dedicated}</figcaption>
        <figcaption class="sub-thumbnail">Size: ${area} sq ft</figcaption>
      </figure>
    </div>
  `;
};
const templesHtml = temples.render(templeCardMapper);

TemplesContainer.innerHTML = templesHtml;

const navMap = {
  Home: {
    route: "Home",
    filter: () => temples,
  },
  Old: {
    route: "Old",
    filter: () =>
      temples.filter((temple) => temple.dedicated.split(",")[0] < 1900),
  },
  New: {
    route: "New",
    filter: () =>
      temples.filter((temple) => temple.dedicated.split(",")[0] > 2000),
  },
  Large: {
    route: "Large",
    filter: () => temples.filter((temple) => temple.area > 90000),
  },
  Small: {
    route: "Small",
    filter: () => temples.filter((temple) => temple.area < 10000),
  },
};

const Nav = document.getElementById("nav");
Nav.addEventListener("click", (e) => {
  e.preventDefault();

  if (!e.target.innerHTML) return;

  const filteredTemples = navMap[e.target.innerHTML].filter();
  TemplesContainer.innerHTML = filteredTemples.render(templeCardMapper);
});
