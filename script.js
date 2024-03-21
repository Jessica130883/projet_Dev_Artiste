
const clickBurger = document.getElementById('clickBurger');
const newMenu = document.getElementById('menuMobile');

clickBurger.addEventListener('click', function() {

    if (menuMobile.style.display === 'none') {
        menuMobile.style.display = 'block';     
    } else {
        menuMobile.style.display = 'none';
    }
});