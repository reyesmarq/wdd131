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
      (product) => `
        <tr>
          <td data-label="Image"><img src="https://reyesmarq.github.io/wdd131/project/images/${product.image}.png" alt="${product.description}"></td>
          <td data-label="Description">${product.description}</td>
          <td data-label="Quantity"><input type="number" name="quantity" value="${product.quantity}" min="1"></td>
          <td data-label="Unit Price">$${product.price}</td>
          <td data-label="Total Price">$${(product.price * product.quantity).toFixed(2)}</td>
          <td data-label="Delete"><button class="delete-btn">X</button></td>
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
})();
