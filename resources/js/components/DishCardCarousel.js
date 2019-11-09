import React, { Component } from "react";
import Slider from "react-slick";
import Card from './Card';

export default class DishCardCarousel extends Component {
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
            <Card/>
          </div>
          <div>
            <Card/>
          </div>
          <div>
            <Card/>
          </div>
          
        </Slider>
      </div>
    );
  }
}