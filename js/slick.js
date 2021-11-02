import $ from "jquery/dist/jquery"
import "slick-carousel/slick/slick.js"

export const initSlider = () => {
    $(document).ready(function(){
        $('.slider__slick').slick({
            dots: true,
            arrows: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            // autoplay: true,
            // autoplayspeed: 800
        });
    });
}
