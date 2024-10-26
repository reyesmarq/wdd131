(async () => {
  const categories_res = await fetch(
    'https://reyesmarq.github.io/wdd131/project/data/categories.json',
  );

  /**
   * @type {{ id: number, name: string }[]}
   */
  const categories = await categories_res.json();

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
})();
