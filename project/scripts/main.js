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

  const productResponse = await fetch(
    'https://reyesmarq.github.io/wdd131/project/data/products.json',
  );

  /**
   * @type {{ id: string, description: string, price: string, category: string, images: string[] }[]}
   */
  const products = await productResponse.json();

  const productsContainer = document.getElementById('products-container');
  const filteredProducts = pathname.includes('categories')
    ? products.filter(({ category }) => category === categoryName)
    : products;

  const productsHtml = filteredProducts
    .map(
      ({ id, description, price, images }) => `
        <div class="product-card">
          <img src="https://reyesmarq.github.io/wdd131/project/images/${images[0]}.png" alt="${description}"
            class="product-image">
          <div class="product-info">
            <p class="product-description">${description}</p>
            <p class="product-price">$${price}</p>
            <div class="button-container">
              <a href="pages/product/index.html?id=${id}" class="button go-to-product">Go to Product</a>
              <button class="button add-to-cart">Add to Cart</button>
            </div>
          </div>
        </div>
      `,
    )
    .join(',')
    .replace(/\,/g, '');

  productsContainer.innerHTML = productsHtml;
})();
