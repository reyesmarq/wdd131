const footerContainer = document.getElementById('footer');

const footerHtmlContent = `
  <p>
    &copy; <span id="currentyear">0</span> <span>&#183;</span> Mauricio
    Alejandro Reyes Quintanilla
    <span>
      <span>&#183;</span> El Salvador
    </span>
  </p>
  <p id="lastModified">0</p>
`;

footerContainer.innerHTML = footerHtmlContent;

const date = new Date();

function getCurrentYear(date) {
  return date.getFullYear();
}

function getLastModified(date) {
  return `${new Intl.DateTimeFormat('en-US', {
    dateStyle: 'short',
  }).format(date)}`;
}

const currentYearElement = document.getElementById('currentyear');
currentYearElement.innerHTML = getCurrentYear(date);

const lastModifiedElement = document.getElementById('lastModified');
lastModifiedElement.innerHTML = `Last Updated: ${getLastModified(date)}`;
lastModifiedElement.classList.add('footer__text-accent');
