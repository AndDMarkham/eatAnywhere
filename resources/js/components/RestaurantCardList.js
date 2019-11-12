import React, { Component } from 'react';
import DishCardCarousel from './DishCardCarousel';
//import RestaurantCard from './RestaurantCard';
import FormRestaurantCard from './FormRestaurantCard';


export default class RestaurantCardList extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            loading: true,
            loaded: false,
            data: { current_page: 1, data: [] }
            
        }
    }

    componentDidMount() {
        const url =
			'http://www.eatanywhere.test:8080/api/restaurants'
		fetch(url)
			.then(res => res.json())
			.then(data => {
				this.setState({
                    loading:false,
                    loaded: true,
                    data: data
                })
                
			})
            
        }
    
      
    render() {
        
        
        return (
        
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-12">
                            {
                                    this.state.data.data.map(restaurant => (
                                    <div className="card">
                                        <div className="card-header row">
                                            <p className="col-sm-12 col-md-3">{ restaurant.name } </p>
                                            <p className="col-sm-12 col-md-3">{ restaurant.address } </p>
                                            <a className="col-sm-12 col-md-3" href="{ restaurant.url } " target="_blank">{ restaurant.website_url } </a>
                                        </div>
                                        <div className="card-body">Check the dishes we have!
                                            <DishCardCarousel/>
                                        </div>
                                    </div>

                                ))
                            }
                            
                    </div>
                </div>
                
                <div className="row justify-content-center">
                Not found what you were looking for? Maybe it's time to upload the delicious dish and the restaurant where you ate it here.
                    </div>
                <FormRestaurantCard 
                    // name={name}
                    // address={address}
                    // opening={opening}
                    // url={url}
                    // onChange={this.handleInputChange}
                    // onSubmit={this.addItem}
                />
            </div>
                    
                
            
        );
    }
}


