import React, { Component } from "react";
import Slider from "react-slick";
import ReviewCard from './ReviewCard';

export default class CardCarousel extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div>
        
        <Slider {...settings}>
          <div>
            <h3><ReviewCard/></h3>
          </div>
          <div>
            <h3><ReviewCard/></h3>
          </div>
          <div>
            <h3><ReviewCard/></h3>
          </div>
          
        </Slider>
      </div>
    );
  }
}