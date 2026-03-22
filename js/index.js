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
  // EID TIMER — ends March 26, 2026
  const eidEnd = new Date('2026-03-26T23:59:59').getTime();
  function tick() {
    const diff = eidEnd - Date.now();
    if (diff <= 0) { document.getElementById('eidBanner').style.display='none'; return; }
    const d = Math.floor(diff/86400000);
    const h = Math.floor((diff%86400000)/3600000);
    const m = Math.floor((diff%3600000)/60000);
    const s = Math.floor((diff%60000)/1000);
    document.getElementById('eidD').textContent = String(d).padStart(2,'0');
    document.getElementById('eidH').textContent = String(h).padStart(2,'0');
    document.getElementById('eidM').textContent = String(m).padStart(2,'0');
    document.getElementById('eidS').textContent = String(s).padStart(2,'0');
  }
  tick(); setInterval(tick, 1000);

  // NAVBAR
  const nb = document.getElementById('navbar');
  window.addEventListener('scroll', () => nb.classList.toggle('scrolled', scrollY > 20));

  // COUNTER
  function animateCounter(el, target, suffix, duration) {
    let start = 0, step = target / (duration/16);
    const t = setInterval(() => { start += step; if(start>=target){el.innerHTML=target+(suffix||'');clearInterval(t)}else{el.textContent=Math.floor(start)+(suffix||'')} }, 16);
  }
  const ps = document.getElementById('heroPills');
  new IntersectionObserver((e) => {
    if(e[0].isIntersecting){
      document.querySelectorAll('.hero-pill-val[data-target]').forEach(el=>animateCounter(el,parseInt(el.dataset.target),el.dataset.suffix||'',1200));
      document.querySelectorAll('.hero-pill').forEach(p=>p.classList.add('animated'));
    }
  },{threshold:.3}).observe(ps);

  // FLOAT CTA
  const pkg = document.getElementById('packages'), fc = document.querySelector('.float-cta');
  if(pkg&&fc) new IntersectionObserver(e=>{fc.style.opacity=e[0].isIntersecting?'0':'1';fc.style.pointerEvents=e[0].isIntersecting?'none':'auto'},{threshold:.1}).observe(pkg);

  // FAQ
  document.querySelectorAll('.faq-q').forEach(q => {
    q.addEventListener('click', () => {
      const item = q.parentElement, open = item.classList.contains('open');
      document.querySelectorAll('.faq-item').forEach(i=>i.classList.remove('open'));
      if(!open) item.classList.add('open');
    });
  });
