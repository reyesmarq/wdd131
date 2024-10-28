(async () => {
  // Section to manage the categories page filter
  const { search } = window.location;
  const { id: productId } = search
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
  const { id, price, images, description } = products.find(
    ({ id }) => id === productId,
  );

  const productContainer = document.getElementById('product-container');

  const productHtml = `
    <div class="product-card">
      <img src="https://reyesmarq.github.io/wdd131/project/images/${images[0]}.png" alt="${description}"
        class="product-image" id="product-image">
      <div class="product-info">
        <p class="product-description">${description}</p>
        <p class="product-price">$${price}</p>
        <div class="button-container">
          <label class="form-label">Quantity</label>
          <input class="form-input" type="number" value="1" >
          <button class="button add-to-cart" data-action="add-to-cart" data-product-id=${id}>Add to Cart</button>
        </div>
      </div>
    </div>
  `;
  productContainer.innerHTML = productHtml;

  // section to handle the change of the image for 3 seconds
  const image = document.getElementById('product-image');
  let imageIndex = 0;
  setInterval(() => {
    imageIndex = imageIndex === images.length - 1 ? 0 : imageIndex + 1;
    image.src = `https://reyesmarq.github.io/wdd131/project/images/${images[imageIndex]}.png`;
  }, 3000);

  productContainer.addEventListener('click', (event) => {
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
