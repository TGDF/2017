import React from 'react';
import 'react-dom';
import { translate } from 'react-i18next';
import Slider from 'react-slick';

const Banner = () => (
  <section id="banner">
    <Slider className="home-slider" autoplay arrows={false} dots={false} pauseOnHover={false}>
      <div><div className="slider slider1" /></div>
      <div><div className="slider slider2" /></div>
    </Slider>
  </section>
);

Banner.propTypes = {
};

export default translate()(Banner);
