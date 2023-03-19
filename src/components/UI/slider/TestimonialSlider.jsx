import React from 'react';
import Slider from 'react-slick';
import ava01 from '../../../assets/images/ava-1.jpg';
import '../../../styles/slider.css';

const TestimonialSlider = () => {
  const settings = {
    dots: true,
    autoPlay: true,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 3000,
    swipeToSlide: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div>
        <p className='Testimonial__text'>
        "If you're looking for top-notch furniture options, Soft Soul is the perfect website to visit. They offer an impressive collection of sofas that are hard to find elsewhere. However, there are occasional issues with the delivery process, particularly when drivers struggle to comprehend delivery instructions due to language differences. It would be beneficial to implement better communication approaches to guarantee seamless deliveries."
        </p>
        <div className='slider__content d-flex align-items-center gap-3'>
          <img src={ava01} alt='avatar' className=' rounded' />
          <h6>Sampavi Sivakumaran</h6>
        </div>
      </div>
      
    </Slider>
  );
};

export default TestimonialSlider;
