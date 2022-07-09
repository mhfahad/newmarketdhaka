import React from 'react';
import './ServicesSlider.css';
import SliderComponent from './SliderComponent';

const ServicesSlider = () => {
  return (
    <div className="services-slider">
      <h1 className="services-slider-title">
        Take a glimps of all the services
      </h1>
      <SliderComponent sliderTitle="Home services" />
      <SliderComponent sliderTitle="Car services" />
      <SliderComponent sliderTitle="IT training" />
    </div>
  );
};

export default ServicesSlider;
