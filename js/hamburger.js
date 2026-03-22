// HAMBURGER MENU
  const hamburger = document.getElementById('navHamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  const menuClose = document.getElementById('menuClose');
  const menuOverlay = document.getElementById('menuOverlay');
  function openMenu() { mobileMenu.classList.add('open'); hamburger.classList.add('open'); document.body.style.overflow='hidden'; }
  function closeMenu() { mobileMenu.classList.remove('open'); hamburger.classList.remove('open'); document.body.style.overflow=''; }
  if(hamburger) hamburger.addEventListener('click', openMenu);
  if(menuClose)  menuClose.addEventListener('click', closeMenu);
  if(menuOverlay) menuOverlay.addEventListener('click', closeMenu);
  document.addEventListener('keydown', e => { if(e.key==='Escape') closeMenu(); });
  // Close mobile menu on internal link click
  mobileMenu && mobileMenu.querySelectorAll('a').forEach(a => {
    if(!a.href.startsWith('http')) a.addEventListener('click', closeMenu);
  });
    window.addEventListener('scroll',()=>{
      document.getElementById('navbar').classList.toggle('scrolled',window.scrollY>10);
    });
