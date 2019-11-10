import React, { Component } from 'react';
import DishCardCarousel from './DishCardCarousel';



export default class RestaurantCard extends Component {
    constructor(props) {
        super(props);
    }  
    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-12">
                                    <div className="card">
                                        <div className="card-header row">
                                            <p className="col-sm-12 col-md-3">{ restaurant.name } </p>
                                            <p className="col-sm-12 col-md-3">{ restaurant.address } </p>
                                            <p className="col-sm-12 col-md-3">{ restaurant.opening } </p>
                                            <a href="{ restaurant.url } " target="_blank">{ restaurant.url } </a>
                                        </div>
                                        <div className="card-body">Check the dishes we have!
                                            <DishCardCarousel/>
                                        </div>
                                    </div>

                                ))
                            }
                            
                    </div>
                </div>
                
            </div>
                
            
        );
    }
}