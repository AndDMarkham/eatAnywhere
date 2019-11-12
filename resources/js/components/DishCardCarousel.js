import React, { Component } from "react";
import Carousel from "react-multi-carousel";
import Card from './Card';
import "react-multi-carousel/lib/styles.css";
 
export default class DishCardCarousel extends Component {
    // constructor(props) {
    //     super(props);
    
    //     this.state = {
    //         loading: true,
    //         loaded: false,
    //         data: { current_page: 1, data: [] }
            
    //     }
    // }

    // componentDidMount() {
    //     const url =
	// 		'http://www.eatanywhere.test:8080/api/restaurants'
	// 	fetch(url)
	// 		.then(res => res.json())
	// 		.then(data => {
	// 			this.setState({
    //                 loading:false,
    //                 loaded: true,
    //                 data: data
    //             })
                
	// 		})
            
    //     }
    
    
    
    
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

    return(
    <Carousel
    swipeable={true}
    // draggable={false}
    showDots={true}
    responsive={responsive}
    // ssr={true} // means to render carousel on server-side.
    // infinite={true}
    //autoPlay={this.props.deviceType !== "mobile" ? true : false}
    //autoPlaySpeed={1000}
    // keyBoardControl={true}
    //customTransition="all .5"
    //transitionDuration={500}
    // containerClass="carousel-container"
    // removeArrowOnDeviceType={["tablet", "mobile"]}
    // deviceType={this.props.deviceType}
    dotListClass="custom-dot-list-style"
    itemClass="carousel-item-padding-100-px"
    >
    <div><Card/></div>
    <div><Card/></div>
    <div><Card/></div>
    <div><Card/></div>
    <div><Card/></div>
    
    </Carousel>

    )}};
