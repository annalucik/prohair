const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav');
const body = document.body;

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    nav.classList.toggle('active');

    if (nav.classList.contains('active')) {
        body.style.overflow = 'hidden';
    } else {
        body.style.overflow = 'auto';
    }
});

document.querySelectorAll('.nav a').forEach(link => {
    link.addEventListener('click', () => {
        burger.classList.remove('active');
        nav.classList.remove('active');
        body.style.overflow = 'auto';
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const tabBtns = document.querySelectorAll('.price__tab-btn');
    const tabPanels = document.querySelectorAll('.price__tab-panel');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const target = btn.dataset.tab;

            tabBtns.forEach(b => b.classList.remove('active'));
            tabPanels.forEach(p => p.classList.remove('active'));

            btn.classList.add('active');
            document.getElementById(target).classList.add('active');
        });
    });
});

(function () {
    var t = document.querySelector('.js-hero-title');
    if (t) {
        setTimeout(function () { t.classList.add('is-visible'); }, 900);
    }
})();