import '../css/style.css';

const logo = document.querySelector('img');
let lastScrollPosition = 0;
let currentRadius = 0;

const roundImage = () => {
  const currentScrollPosition = window.scrollY;
  const radius =
    lastScrollPosition > currentScrollPosition
      ? currentRadius - 0.05
      : currentRadius + 0.05;
  logo.style.transform = `rotate(${radius}rad)`;
  lastScrollPosition = currentScrollPosition;
  currentRadius = radius;
};

window.addEventListener('scroll', roundImage);
