const burger = document.querySelector('.header__top-burger');
const menuXMark = document.querySelector('.header__screen-close');
const menuScreen = document.querySelector('.header__screen');
const headerNavLinks = document.querySelectorAll('.header__nav-link');

burger.addEventListener('click', openFullScreen);
menuXMark.addEventListener('click', closeFullScreen);
window.addEventListener("keydown", (e) => {
    if (e.key === 'Escape') {
        closeFullScreen();
  
    }
  })
function openFullScreen() {
    menuScreen.classList.add('header__screen--active');
    let timing = 0.2;
    for (let link = 0; link < headerNavLinks.length; link++) {
        headerNavLinks[link].addEventListener('click', closeFullScreen);
        headerNavLinks[link].style.animation = `fadeLeft 1s ${timing}s forwards`;
        timing = timing + 0.1;
    }
}

function closeFullScreen() {
    menuScreen.classList.remove('header__screen--active');
    let timing = 0.2;
    for (let link = 0; link < headerNavLinks.length; link++) {
        headerNavLinks[link].style.animation = `fadeRight 1s ${timing}s forwards`;
        timing = timing + 0.1;
    }
}

