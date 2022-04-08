const list = document.querySelectorAll('.link-menu');
const aboutLinks = document.querySelectorAll('.menu-about-me');



function activeAboutLink() {
    aboutLinks.forEach((item) => 
        item.classList.remove('about-me-active'));
        this.classList.add('about-me-active');
}

function activeLink() {
    list.forEach((item) => 
        item.classList.remove('active'));
        this.classList.add('active');
}

list.forEach((item) => item.addEventListener('click', activeLink));
aboutLinks.forEach((item) => item.addEventListener('click', activeAboutLink));




