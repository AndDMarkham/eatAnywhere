import React, { Component } from "react";
import Carousel from "react-multi-carousel";
import Card from './Card';
import "react-multi-carousel/lib/styles.css";
 
export default class DishCardCarousel extends Component {
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
// import Slider from "react-slick";
// import Card from './Card';

// export default class DishCardCarousel extends Component {
//   render() {
//     const settings = {
//       dots: true,
//       infinite: true,
//       speed: 500,
//       slidesToShow: 1,
//       slidesToScroll: 1
//     };
//     return (
//       <div>
        
//         <Slider {...settings}>
//           <div>
//             <Card/>
//           </div>
//           <div>
//             <Card/>
//           </div>
//           <div>
//             <Card/>
//           </div>
          
//         </Slider>
//       </div>
//     );
//   }
// }