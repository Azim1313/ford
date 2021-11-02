export const initServices = () => {
  const buttons = document.querySelectorAll('.services__link'),
           tabs = document.querySelectorAll('.services__cart-container');

  buttons.forEach(button => {
    button.addEventListener('click', e => {
      buttons.forEach(button => {
        button.classList.remove('active');
      })
      e.preventDefault();
      const id = e.target.getAttribute('href').replace('#','');
      tabs.forEach(tab => {
        tab.classList.remove('active');
      })
      button.classList.add('active');
      document.getElementById(id).classList.add('active');
    })
  })
}