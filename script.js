const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');

menuToggle?.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});

document.querySelectorAll('.main-nav a').forEach((link) => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('open');
    menuToggle?.setAttribute('aria-expanded', 'false');
  });
});

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.animationPlayState = 'running';
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((element) => {
  element.style.animationPlayState = 'paused';
  revealObserver.observe(element);
});

const backToTop = document.querySelector('.back-to-top');

const updateBackToTop = () => {
  backToTop?.classList.toggle('is-visible', window.scrollY > 500);
};

window.addEventListener('scroll', updateBackToTop, { passive: true });
backToTop?.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

document.addEventListener('keydown', (event) => {
  const activeElement = document.activeElement;
  const isTyping = activeElement instanceof HTMLInputElement || activeElement instanceof HTMLTextAreaElement;

  if (event.key === 'Home' && !isTyping) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
});
