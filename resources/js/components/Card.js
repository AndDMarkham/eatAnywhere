import React, {Component} from 'react';
import CardCarousel from './CardCarousel';
import ReviewCard from './ReviewCard';


import './index.scss';

export default class Card extends Component {
    render(){
        return (
           
           <div className="cardBig">
               <h5>Wings</h5>
               <p>diets: keto</p>
               <a href="">restaurant link</a>
               <p>made of: chicken, sauce</p>
               <CardCarousel/>
           </div>
        )
    }
}