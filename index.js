window.onscroll = function showHeader() {

    const header = document.querySelector('.header');

    if(window.pageYOffset > 0.5) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }

}