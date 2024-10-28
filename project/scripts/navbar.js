(() => {
  const headerContainer = document.getElementById('header-container');
  const navHtml = `
    <div class="header__nav">
      <h1 class="header__title">
        <a href="https://reyesmarq.github.io/wdd131/project/index.html">pcpartify</a>
      </h1>
      <div class="header__icon" id="nav-hamburger">
        ☰
      </div>
    </div>
    <nav class="nav" id="nav">
      <ul class="nav__menu">
        <li class="nav__menu-item">
          <a href="https://reyesmarq.github.io/wdd131/project/pages/checkout" class="nav__menu-link">Checkout</a>
        </li>
      </ul>
    </nav>
  `;

  headerContainer.innerHTML = navHtml;

  document.getElementById('nav-hamburger').addEventListener('click', () => {
    document.querySelector('.nav .nav__menu').classList.toggle('show');
  });
})();
