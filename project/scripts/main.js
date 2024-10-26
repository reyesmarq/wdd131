document.getElementById('navHamburger').addEventListener('click', function () {
  document.querySelector('.nav .nav__menu').classList.toggle('show');
});

// Categories
const categories = [
  {
    id: 1,
    name: 'accessories',
  },
  {
    id: 2,
    name: 'audio',
  },
  {
    id: 3,
    name: 'computers',
  },
  {
    id: 4,
    name: 'components',
  },
  {
    id: 5,
    name: 'storage',
  },
  {
    id: 6,
    name: 'printers',
  },
  {
    id: 7,
    name: 'software',
  },
  {
    id: 8,
    name: 'monitors',
  },
  {
    id: 9,
    name: 'networking',
  },
  {
    id: 10,
    name: 'energy',
  },
];

const categoriesContainer = document.getElementById('categories-container');
const categoriesHtml = categories
  .map(
    ({ id, name }) => `
    <li class="list__item">
      <a href="pages/products/categories/index.html?id=${id}" class="list__link">${name}</a>
    </li>
  `,
  )
  .join(',')
  .replace(/\,/g, '');

categoriesContainer.innerHTML = categoriesHtml;
