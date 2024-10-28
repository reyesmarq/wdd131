(async () => {
  const products = JSON.parse(localStorage.getItem('cart')) || [];

  const tHeadHtmlContent = `
    <tr>
      <th>Image</th>
      <th>Description</th>
      <th>Quantity</th>
      <th>Unit Price</th>
      <th>Total Price</th>
      <th>Delete</th>
    </tr>
  `;

  const tBodyHtmlContent = products
    .map(
      ({ id, description, quantity, price, image }) => `
        <tr>
          <td data-label="Image"><img src="https://reyesmarq.github.io/wdd131/project/images/${image}.png" alt="${description}"></td>
          <td data-label="Description">${description}</td>
          <td data-label="Quantity"><input type="number" name="quantity" value="${quantity}" min="1"></td>
          <td data-label="Unit Price">$${price}</td>
          <td data-label="Total Price">$${(price * quantity).toFixed(2)}</td>
          <td data-label="Delete"><button class="delete-btn" data-action="delete" data-product-id="${id}">X</button></td>
        </tr>
      `,
    )
    .join('')
    .replace(/,/g, '');

  const checkoutContainer = document.getElementById('checkout-container');
  const checkoutHtml = `
    <thead>
      ${tHeadHtmlContent}
    </thead>
    <tbody>
      ${tBodyHtmlContent}
    </tbody>
  `;
  checkoutContainer.innerHTML = checkoutHtml;

  checkoutContainer.addEventListener('click', (event) => {
    const action = event.target.dataset['action'];
    const procuctId = event.target.dataset['productId'];

    if (action === 'delete') {
      const updatedProducts = products.filter(({ id }) => id !== procuctId);
      localStorage.setItem('cart', JSON.stringify(updatedProducts));
      location.reload();
    }
  });
})();
