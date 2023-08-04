const container = document.getElementById('navMenu');
const menuBtn = document.querySelector('.menuBtn');
const headerIcon = document.querySelector('.header-icon');
const portifolio =document.getElementById("portifoliobtn") 
const about =document.getElementById("aboutbtn") 
const contact =document.getElementById("contactbtn") 

const showMenu = () => {
  container.style.display = 'block';
};
const hideMenu = () => {
  container.style.display = 'none';
};
menuBtn.addEventListener('click', hideMenu);
headerIcon.addEventListener('click', showMenu);

portifolio.addEventListener("click", hideMenu)
about.addEventListener("click", hideMenu)
contact.addEventListener("click", hideMenu)