function copyUID(suffix) {
      const uid = document.getElementById('uid-num' + (suffix||'')).textContent;
      navigator.clipboard.writeText(uid).then(() => {
        const btn = document.getElementById('copy-text' + (suffix||''));
        btn.textContent = 'Copied! ✓';
        setTimeout(() => btn.textContent = 'UID Copy করুন', 2000);
      });
    }
    document.addEventListener('DOMContentLoaded', function() {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); }
        });
      }, { threshold: 0.05, rootMargin: '0px 0px -20px 0px' });
      document.querySelectorAll('.reveal').forEach((el, i) => {
        el.style.transitionDelay = (i % 4) * 0.07 + 's';
        observer.observe(el);
      });
      // Fallback: show all after 1.5s in case observer fails
      setTimeout(() => {
        document.querySelectorAll('.reveal:not(.visible)').forEach(el => el.classList.add('visible'));
      }, 1500);
    });
