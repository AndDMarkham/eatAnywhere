import React, { Component } from 'react';
import DishCardCarousel from './DishCardCarousel';


export default class RestaurantCard extends Component {
    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header">U Bansethu</div>

                            <div className="card-body">Check the dishes we have!
                            <DishCardCarousel/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header">BeerGeeks</div>

                            <div className="card-body">Check the dishes we have!
                            <DishCardCarousel/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header">BadJeff's</div>

                            <div className="card-body">Check the dishes we have!
                            <DishCardCarousel/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}