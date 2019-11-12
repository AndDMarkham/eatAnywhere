import React, {Component} from 'react';
import ReactStars from 'react-stars';


import './index.scss';

export default class ReviewCard extends Component {
    constructor(props){
        super(props)
        
    }
    
    
    render(){
        const ratingChanged = (newRating) => {
        console.log(newRating)
      }
        return (
           
           <div className="reviewCard card">
               <img className="dishImg" src="./images/IMG_1589.jpg" alt=""/>
               
               <ReactStars
            count={5}
            onChange={ratingChanged}
            size={10}
            color2={'#ffd700'} />
               <p>This meal was really awesome</p>
                
           </div>
        )
    }
}