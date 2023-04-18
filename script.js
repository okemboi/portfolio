const handleClick = () => {
  const mobileNavMenu = document.querySelector('#mobilemenu');
  const mobileMenuOverlay = document.querySelector('.mobile-menu-overlay');
  hamburger.classList.toggle('mobile-menu-inactive');
  hamburger.classList.toggle('mobile-menu');
  document.body.classList.toggle('menu-active');
  mobileMenuOverlay.classList.toggle('mobile-menu-overlay-active');
};

document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('#hamburger').addEventListener('click', handleClick);
  document.querySelectorAll('.mobile-menu-links, .disabled-button').forEach((button) => button.addEventListener('click', handleClick));
});