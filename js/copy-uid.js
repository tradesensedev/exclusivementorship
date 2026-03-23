function copyUID(suffix) {
    const uid = document.getElementById('uid-num' + (suffix || '')).textContent.trim();
    navigator.clipboard.writeText(uid).then(() => {
        const btn = document.getElementById('copy-text' + (suffix || ''));
        const btnEl = btn.closest('button');
        btn.textContent = 'Copied ✓';
        btnEl.classList.add('copied');
        setTimeout(() => { btn.textContent = 'Copy UID'; btnEl.classList.remove('copied'); }, 2000);
    });
}
function copyAddr() {
    const addr = document.getElementById('uid-addr').textContent.trim();
    navigator.clipboard.writeText(addr).then(() => {
        const btn = document.getElementById('copy-addr-text');
        const btnEl = btn.closest('button');
        btn.textContent = 'Copied ✓';
        btnEl.classList.add('copied');
        setTimeout(() => { btn.textContent = 'Copy Address'; btnEl.classList.remove('copied'); }, 2000);
    });
}
document.addEventListener('DOMContentLoaded', function() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                e.target.classList.add('visible');
                observer.unobserve(e.target);
            }
        });
    }, { threshold: 0.05, rootMargin: '0px 0px -20px 0px' });
    document.querySelectorAll('.reveal').forEach((el, i) => {
        el.style.transitionDelay = (i % 4) * 0.07 + 's';
        observer.observe(el);
    });
    setTimeout(() => {
        document.querySelectorAll('.reveal:not(.visible)').forEach(el => el.classList.add('visible'));
    }, 1500);
});