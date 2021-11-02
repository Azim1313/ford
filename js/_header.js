
export const initHeader = () => {
  const body = document.querySelector('body'),
         nav = document.querySelector('.header__menu'),
        menu = document.querySelector('.header__mobile-menu'),
   menuLinks = document.querySelectorAll('.header__menu>li,.header__contact');

  menu.addEventListener('click', ()=> {
    menu.classList.toggle('active')
    nav.classList.toggle('active')
    body.classList.toggle('lock')
  })

  menuLinks.forEach(link => link.addEventListener('click', () => closeMenu()))

  function closeMenu (){
    menu.classList.remove('active')
    nav.classList.remove('active')
    body.classList.remove('lock')
  }
}