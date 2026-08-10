// 1. CARREGADOR DE PÁGINAS
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

setTimeout(() => {
  const track = document.querySelector('.carousel-track');
  const slides = document.querySelectorAll('.carousel-slide');
  const nextBtn = document.querySelector('.next-btn');
  const prevBtn = document.querySelector('.prev-btn');

  if (track && slides.length > 0) {
    let currentIndex = 0; 

    function updateCarousel() {
      const moveAmount = currentIndex * 100;
      track.style.transform = `translateX(-${moveAmount}%)`;
    }

    nextBtn.addEventListener('click', () => {
      if (currentIndex === slides.length - 1) {
        currentIndex = 0;
      } else {
        currentIndex++;
      }
      updateCarousel();
    });

    prevBtn.addEventListener('click', () => {
      if (currentIndex === 0) {
        currentIndex = slides.length - 1;
      } else {
        currentIndex--;
      }
      updateCarousel();
    });
  }
}, 1000);