import React from 'react';
import 'react-dom';
import { translate } from 'react-i18next';
import Slider from 'react-slick';

import slider1 from '../assets/slides/slide_1.jpg';
import slider2 from '../assets/slides/slide_2.jpg';

const Banner = () => (
  <section id="banner">
    <Slider className="home-slider" autoplay arrows={false} dots={false} pauseOnHover={false}>
      <img src={slider1} alt="" />
      <img src={slider2} alt="" />
    </Slider>
  </section>
);

Banner.propTypes = {
};

export default translate()(Banner);
