const menu = document.querySelector('#mobile-menu'); //you created this ID in index, the hashtag directs to the #
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});