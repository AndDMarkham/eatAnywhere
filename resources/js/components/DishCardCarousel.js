import React, { Component } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from "./Card";

export default class DishCardCarousel extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            loaded: false,
            data: []

        }
    }

    componentDidMount() {
    //     const url =
    //         'http://www.eatanywhere.test:8080/api/dishes'
    //     fetch(url)
    //         .then(res => res.json())
    //         .then(data => {
    //             this.setState({
    //                 loading: false,
    //                 loaded: true,
    //                 data: data
    //             })

    //         })

    }

    render() {
        const responsive = {
            desktop: {
                breakpoint: { max: 3000, min: 1024 },
                items: 2,
                slidesToSlide: 2, // optional, default to 1.
            },
            tablet: {
                breakpoint: { max: 1024, min: 464 },
                items: 1,
                slidesToSlide: 1, // optional, default to 1.
            },
            mobile: {
                breakpoint: { max: 464, min: 0 },
                items: 1,
                slidesToSlide: 1, // optional, default to 1.
            },
        }

        return (
            <Carousel
                swipeable={true}
                // draggable={false}
                showDots={true}
                responsive={responsive}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-100-px"
            >

                {
                    this.state.data.map(dish => (
                        <Card
                        dish= {dish}
                        />
                    ))
                }

            </Carousel>

        )
    }
};
