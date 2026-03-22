  // HAMBURGER — only navHamburger exists in HTML
  const hamburger = document.getElementById('navHamburger');
  if(hamburger) hamburger.addEventListener('click', () => hamburger.classList.toggle('open'));
  document.addEventListener('keydown', e => { if(e.key==='Escape') hamburger && hamburger.classList.remove('open'); });

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

  // NAVBAR
  const nb = document.getElementById('navbar');
  window.addEventListener('scroll', () => nb && nb.classList.toggle('scrolled', scrollY > 20));

  // COUNTER
  function animateCounter(el, target, suffix, duration) {
    let start = 0, step = target / (duration/16);
    const t = setInterval(() => { start += step; if(start>=target){el.innerHTML=target+(suffix||'');clearInterval(t)}else{el.textContent=Math.floor(start)+(suffix||'')} }, 16);
  }
  const ps = document.getElementById('heroPills');
  if(ps) new IntersectionObserver((e) => {
    if(e[0].isIntersecting){
      document.querySelectorAll('.hero-pill-val[data-target]').forEach(el=>animateCounter(el,parseInt(el.dataset.target),el.dataset.suffix||'',1200));
      document.querySelectorAll('.hero-pill').forEach(p=>p.classList.add('animated'));
    }
  },{threshold:.3}).observe(ps);

  // FAQ
  document.querySelectorAll('.faq-q').forEach(q => {
    q.addEventListener('click', () => {
      const item = q.parentElement, open = item.classList.contains('open');
      document.querySelectorAll('.faq-item').forEach(i=>i.classList.remove('open'));
      if(!open) item.classList.add('open');
    });
  });
