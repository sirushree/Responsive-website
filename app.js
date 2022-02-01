
const hamburger = document.getElementsByClassName('hamburger')[0];
const navbarNav = document.getElementsByClassName('navbar-nav')[0];

hamburger.addEventListener('click', function(){
    hamburger.classList.toggle('active');
    navbarNav.classList.toggle('active');
});

