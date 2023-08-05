const container = document.getElementById('navMenu');
const menuBtn = document.querySelector('.menuBtn');
const headerIcon = document.querySelector('.header-icon');
const portifolio = document.getElementById('portifoliobtn');
const about = document.getElementById('aboutbtn');
const contact = document.getElementById('contactbtn');

const showMenu = () => {
  container.style.display = 'block';
};
const hideMenu = () => {
  container.style.display = 'none';
};
menuBtn.addEventListener('click', hideMenu);
headerIcon.addEventListener('click', showMenu);

portifolio.addEventListener('click', hideMenu);
about.addEventListener('click', hideMenu);
contact.addEventListener('click', hideMenu);

const submitButton = document.getElementById("submit-button2");

submitButton.addEventListener("click", (event) => {

    const emailInput = document.getElementById("email");
    const email = emailInput.value;

    if (email !== email.toLowerCase()) {

        const errorMessage = document.getElementById("email-error");
        errorMessage.style.display = "block";
        event.preventDefault();
    } else {

        const errorMessage = document.getElementById("email-error");
        errorMessage.style.display = "none";
    }
}
  )
    ;