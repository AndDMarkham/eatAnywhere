import React, { Component } from "react";
import Slider from "react-slick";
import ReviewCard from './ReviewCard';

export default class CardCarousel extends Component {
  constructor(props) {
    super(props);

    this.state = {
        loading: true,
        data: []
    }
}

componentDidMount() {
    const url =
        'http://www.eatanywhere.test:8080/api/reviews'
    fetch(url)
        .then(res => res.json())
        .then(data => {
          console.log('data', data.length)
            this.setState({
                loading: false,
                data: data
            })

        })

}
  render() {
    console.log('cardcarou', this.props)
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
                {
                    this.state.data.map(card => (
                        <ReviewCard
                        image_id= {card.image_id}
                        rating={card.rating}
                        text={card.text}
                        />
                    ))
                }
          
        </Slider>
      </div>
    );
  }
}