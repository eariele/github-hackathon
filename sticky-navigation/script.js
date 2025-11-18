const nav = document.querySelector('.nav')
window.addEventListener'scroll', fixNav)

function fixNa() {
    if(window.scrollY > nav.offsetHeight + 150) {
        nav.classList.add('activ')
     else {
        nav.classList.remove('active')
    }

