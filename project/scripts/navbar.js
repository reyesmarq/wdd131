(() => {
  const headerContainer = document.getElementById('header-container');
  const navHtml = `
    <div class="header__nav">
      <h1 class="header__title">
        pcpartify
      </h1>
      <div class="header__icon" id="nav-hamburger">
        ☰
      </div>
    </div>
    <nav class="nav" id="nav">
      <ul class="nav__menu">
        <li class="nav__menu-item">
          <a href="index.html" class="nav__menu-link">link</a>
        </li>
        <li class="nav__menu-item">
          <a href="index.html" class="nav__menu-link">link</a>
        </li>
        <li class="nav__menu-item">
          <a href="index.html" class="nav__menu-link">link</a>
        </li>
        <li class="nav__menu-item">
          <a href="index.html" class="nav__menu-link">link</a>
        </li>
        <li class="nav__menu-item">
          <a href="index.html" class="nav__menu-link">link</a>
        </li>
      </ul>
    </nav>
  `;

  headerContainer.innerHTML = navHtml;

  document.getElementById('nav-hamburger').addEventListener('click', () => {
    document.querySelector('.nav .nav__menu').classList.toggle('show');
  });
})();
