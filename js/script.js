const container = document.getElementById('navMenu');
const menuBtn = document.querySelector('.menuBtn');
const headerIcon = document.querySelector('.header-icon');

const showMenu = () => {
  container.style.display = 'block';
};
const hideMenu = () => {
  container.style.display = 'none';
};
menuBtn.addEventListener('click', hideMenu);
headerIcon.addEventListener('click', showMenu);