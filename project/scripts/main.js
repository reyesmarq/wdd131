(async () => {
  document.getElementById('navHamburger').addEventListener('click', () => {
    document.querySelector('.nav .nav__menu').classList.toggle('show');
  });

  const productResponse = await fetch(
    'https://reyesmarq.github.io/wdd131/project/data/products.json',
  );

  /**
   * @type {{ id: string, description: string, price: string, category: string, images: string[] }[]}
   */
  const products = await productResponse.json();

  const productsContainer = document.getElementById('products-container');
  const productsHtml = products
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

  //<a href="pages/products/categories/index.html?id=${id}" class="list__link">${name}</a>

  productsContainer.innerHTML = productsHtml;
})();
