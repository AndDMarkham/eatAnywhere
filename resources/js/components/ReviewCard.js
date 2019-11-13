import React, {Component} from 'react';
import ReactStars from 'react-stars';


import './index.scss';

export default class ReviewCard extends Component {
    constructor(props){
        super(props)
        
    }
    
    
    render(){
        console.log('test', this.props);
        const {image} = this.props
        const {rating}= this.props
        const {text} = this.props
        
        const ratingChanged = (newRating) => {
        console.log(newRating)
      }
        return (
           
           <div className="reviewCard card">
               <img className="dishImg" src="{image}" alt=""/>
               
               <ReactStars
            count={5}
            onChange={ratingChanged}
            size={10}
            color2={'#ffd700'} />
               <p>{text}</p>
                
           </div>
        )
    }
}