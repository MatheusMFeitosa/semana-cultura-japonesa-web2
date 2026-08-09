function loadComponent(containerId, filePath) {
  fetch(filePath)
    .then(response => response.text())
    .then(htmlContent => {
      document.getElementById(containerId).innerHTML = htmlContent;
    });
}

loadComponent('hero-content', 'hero.html');
loadComponent('about-content', 'sobre.html');
loadComponent('menu-content', 'cardapio.html');
loadComponent('schedule-content', 'programacao.html');