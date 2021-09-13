const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".head");

btnNavEl.addEventListener('click', function() {
    headerEl.classList.toggle('nav-open');
});