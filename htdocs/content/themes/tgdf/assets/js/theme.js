import './jquery.dropotron.min.js';
import $ from 'jquery';

$(function() {
  $('#home-slider, #b2b-slider').slick({
    autoplay: true,
    dots: false,
    arrows: false,
    pauseOnHover: false
  });
});
