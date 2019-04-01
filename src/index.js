import './style/main.scss';
import toggleMenu from './script/toggleMenu';
const close = document.querySelector('.nav__close');
const burger = document.querySelector('.burger');

close.addEventListener('click', toggleMenu);
burger.addEventListener('click', toggleMenu);
