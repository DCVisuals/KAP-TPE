
document.addEventListener('DOMContentLoaded', function () {
  const faders = document.querySelectorAll('.fade-in');

  function appearOnScroll() {
    faders.forEach(fader => {
      const rect = fader.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        fader.classList.add('visible');
      }
    });
  }

  window.addEventListener('scroll', appearOnScroll);
  appearOnScroll(); // initial check
});
