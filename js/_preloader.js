export const initPreloader = () => {
  
  window.onload = (function () {
    // document.querySelector('.preloader').classList.add('loaded_hiding');
    window.setTimeout(function () {
        document.querySelector('.preloader').classList.add('loaded');
        document.querySelector('.preloader').classList.remove('loaded_hiding');
    }, 500);
  })
};
