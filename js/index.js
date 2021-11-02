import { initHeader } from './_header';
import { initServices } from './_services';
import { initSlider } from './slick';
import { initPopup } from './_popup';
import { initPreloader } from './_preloader'



(function () {
  if (typeof NodeList !== 'undefined' && NodeList.prototype && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = Array.prototype.forEach;
  }

  try {
    initHeader();
    initServices();
    initSlider();
    initPopup();
    initPreloader();
  } catch (err) {
    console.log(err);
  }
  
})();