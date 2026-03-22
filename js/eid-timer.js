// EID TIMER — ends March 26, 2026
  const eidEnd = new Date('2026-03-26T23:59:59').getTime();
  function tick() {
    const diff = eidEnd - Date.now();
    if (diff <= 0) { const b = document.getElementById('eidBanner'); if(b) b.style.display='none'; return; }
    const d = Math.floor(diff/86400000);
    const h = Math.floor((diff%86400000)/3600000);
    const m = Math.floor((diff%3600000)/60000);
    const s = Math.floor((diff%60000)/1000);
    const pad = n => String(n).padStart(2,'0');
    const eD = document.getElementById('eidD'); if(eD) eD.textContent = pad(d);
    const eH = document.getElementById('eidH'); if(eH) eH.textContent = pad(h);
    const eM = document.getElementById('eidM'); if(eM) eM.textContent = pad(m);
    const eS = document.getElementById('eidS'); if(eS) eS.textContent = pad(s);
  }
  tick(); setInterval(tick, 1000);
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
