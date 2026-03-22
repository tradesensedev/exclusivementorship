  // HAMBURGER — only navHamburger exists in HTML
  const hamburger = document.getElementById('navHamburger');
  if(hamburger) hamburger.addEventListener('click', () => hamburger.classList.toggle('open'));
  document.addEventListener('keydown', e => { if(e.key==='Escape') hamburger && hamburger.classList.remove('open'); });

  // NAVBAR
  window.addEventListener('scroll', () => {
    const nb = document.getElementById('navbar');
    if(nb) nb.classList.toggle('scrolled', window.scrollY > 10);
  });
