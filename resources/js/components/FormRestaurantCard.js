import React, { Component } from 'react';
import FileUpload from './FileUpload';
import ReactStars from 'react-stars';


export default class RestaurantCard extends Component {
    render() {
        const ratingChanged = (newRating) => {
            console.log(newRating)
          }
        
        return (
        
            
                <div className="row justify-content-center">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header">
                            <form>
                                <div className="row">
                                    <div className="col-sm-12 col-md-3">
                                    <input placeholder="Name of restaurant" />
                                    </div>
                                    <div className="col-sm-12 col-md-3">
                                    <input placeholder="Address"/>
                                    </div>
                                    <div className="col-sm-12 col-md-3">
                                    <input placeholder="Opening"/>
                                    </div>
                                    <div className="col-sm-12 col-md-3">
                                    <input placeholder="url"/>
                                    </div>
                                </div>
                            </form>
                            </div>

                            <div className="card-body">
                                <input placeholder="Name of the dish"/>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                                    <label className="form-check-label" htmlFor="defaultCheck1">
                                        Keto
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                                    <label className="form-check-label" htmlFor="defaultCheck1">
                                        Vegetarian
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                                    <label className="form-check-label" htmlFor="defaultCheck1">
                                        Vegan
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                                    <label className="form-check-label" htmlFor="defaultCheck1">
                                        Kosher
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                                    <label className="form-check-label" htmlFor="defaultCheck1">
                                        Halal
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                                    <label className="form-check-label" htmlFor="defaultCheck1">
                                        Gluten allergy
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                                    <label className="form-check-label" htmlFor="defaultCheck1">
                                        Tree nuts allergy
                                    </label>
                                </div>
                                <textarea placeholder="Ingredients of the dish"/>
                                                                                                                                <FileUpload />
                                                                                                                                <ReactStars
                                    count={5}
                                    onChange={ratingChanged}
                                    size={10}
                                    color2={'#ffd700'} />
                                <textarea placeholder="review of the dish" />
                            
                            </div>
                        </div>
                    </div>
                </div>
        
        );
    }
}