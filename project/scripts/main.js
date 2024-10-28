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
              <a href="https://reyesmarq.github.io/wdd131/project/pages/product/index.html?id=${id}" class="button go-to-product">Go to Product</a>
              <button class="button add-to-cart" data-action="add-to-cart" data-product-id=${id}>Add to Cart</button>
            </div>
          </div>
        </div>
      `,
    )
    .join(',')
    .replace(/\,/g, '');

  productsContainer.innerHTML = productsHtml;

  productsContainer.addEventListener('click', (event) => {
    const action = event.target.dataset['action'];
    const procuctId = event.target.dataset['productId'];

    if (action === 'add-to-cart') {
      const cart = JSON.parse(localStorage.getItem('cart')) || [];
      const { images, ...product } = products.find(
        ({ id }) => id === procuctId,
      );
      const productCart = {
        ...product,
        image: images[0],
      };
      console.log('productCart', productCart);
      // manage if the product is in the cart then mutate that item and increase the quantity
      const productIndex = cart.findIndex(({ id }) => id === procuctId);
      if (productIndex !== -1) {
        cart[productIndex].quantity += 1;
      } else {
        cart.push({ ...productCart, quantity: 1 });
      }

      localStorage.setItem('cart', JSON.stringify(cart));
      showToast('Product added to cart');
    }
  });
})();
