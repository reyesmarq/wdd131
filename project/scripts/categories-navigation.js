(async () => {
  // Section to manage the categories page filter
  const { pathname, search } = window.location;

  const { name: categoryName } = search
    .split('?')
    .map((pair) => {
      if (pair !== '') return pair.split('=');
    })
    .filter((values) => values)
    .reduce((json, params) => {
      let key = params[0];
      let value = params[1];
      return { ...json, [key]: value };
    }, {});

  const categories_res = await fetch(
    'https://reyesmarq.github.io/wdd131/project/data/categories.json',
  );

  /**
   * @type {{ id: number, name: string }[]}
   */
  const categories = await categories_res.json();

  const categoriesContainer = document.getElementById('categories-container');
  const categoriesHtml = categories
    .map(({ name }) => {
      const classesToAdd =
        pathname.includes('categories') && categoryName === name
          ? 'list__link list__link-active'
          : 'list__link';
      return `
        <li class="list__item">
          <a href="pages/products/categories/index.html?name=${name}" class="${classesToAdd}">${name}</a>
        </li>
      `;
    })
    .join(',')
    .replace(/\,/g, '');

  categoriesContainer.innerHTML = categoriesHtml;
})();
