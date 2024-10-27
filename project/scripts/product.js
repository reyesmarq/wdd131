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
  const { price, images, description } = products.find(
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
          <button class="button add-to-cart">Add to Cart</button>
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
})();
