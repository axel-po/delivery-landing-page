function menu() {
const menu = document.querySelector('.nav')
const btnMenu = document.querySelector('.header__btn--menu')

btnMenu.addEventListener('click', () => {
    menu.classList.toggle('nav--active')
})
}

menu()

function animationHeader() {
    const header = document.querySelector(".header");
  
    window.addEventListener("scroll", () => {
      if (window.scrollY > 10) {
        header.classList.add("header--active");
      } else {
        header.classList.remove("header--active");
      }
    });
  }
  animationHeader();