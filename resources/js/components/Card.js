import React, {Component} from 'react';
import CardCarousel from './CardCarousel';
import ReviewCard from './ReviewCard';


import './index.scss';

export default class Card extends Component {
    constructor(props) {
        super(props)
        this.reviews = [
        {image_id: 'image_id',
        rating: 5,
        text: 'blah'
    }
    ]
    }
    
    
    
    render(){
        console.log('test', this.props);
        const {dish} = this.props
        return (
           
           <>
               
                <div className="cardBig">
                    <h5>{ dish.name }</h5>
                    <p>diets: keto</p>
                    <a href="{ dish.restaurant_id }">restaurant link</a>
                    <p>{ dish.description }</p>
                    <CardCarousel 
                    reviews= {this.reviews}/>
                </div>
                
            
            </>  
           
        )
    }
}