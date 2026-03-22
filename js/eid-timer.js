  // EID TIMER — ends March 26, 2026
  const eidEnd = new Date('2026-03-26T23:59:59').getTime();

  function tick() {
      const diff = eidEnd - Date.now();
      if (diff <= 0) { const b = document.getElementById('eidBanner'); if (b) b.style.display = 'none'; return; }
      const d = Math.floor(diff / 86400000);
      const h = Math.floor((diff % 86400000) / 3600000);
      const m = Math.floor((diff % 3600000) / 60000);
      const s = Math.floor((diff % 60000) / 1000);
      const pad = n => String(n).padStart(2, '0');
      const eD = document.getElementById('eidD');
      if (eD) eD.textContent = pad(d);
      const eH = document.getElementById('eidH');
      if (eH) eH.textContent = pad(h);
      const eM = document.getElementById('eidM');
      if (eM) eM.textContent = pad(m);
      const eS = document.getElementById('eidS');
      if (eS) eS.textContent = pad(s);
  }
  tick();
  setInterval(tick, 1000);

  // HAMBURGER — only navHamburger exists in HTML
  const hamburger = document.getElementById('navHamburger');
  if (hamburger) hamburger.addEventListener('click', () => hamburger.classList.toggle('open'));
  document.addEventListener('keydown', e => { if (e.key === 'Escape') hamburger && hamburger.classList.remove('open'); });

  // NAVBAR
  window.addEventListener('scroll', () => {
      const nb = document.getElementById('navbar');
      if (nb) nb.classList.toggle('scrolled', window.scrollY > 10);
  });