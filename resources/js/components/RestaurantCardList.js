import React, { Component } from 'react';
import DishCardCarousel from './DishCardCarousel';
//import FormRestaurantCard from './FormRestaurantCard';


export default class RestaurantCardList extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            loading: true,
            restaurants: [
                {
                    name: '',
                    address: '',
                    website_url: '',
                    id: 0,
                    dishes: [
                        {
                            name: '',
                            diets_id: 0,
                            reviews: [
                                {
                                    img_url: '',
                                    rating: 0,
                                    text: ''
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    }

    componentDidMount() {
        const url =
			'http://www.eatanywhere.test:8080/api/restaurants'
		fetch(url)
			.then(res => res.json())
			.then(restaurants => {
				this.setState({
                    loading:false,
                    restaurants: restaurants
                    
                })
                
			})
            
        }
    
      
    render() {
        
        console.log(this.state.data);
        return (
        
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-12">
                            {
                                    this.state.restaurants.map((restaurant, key) => (
                                    <div className="card" key={key}>
                                        <div className="card-header row">
                                            <p className="col-sm-12 col-md-3">{ restaurant.name } </p>
                                            <p className="col-sm-12 col-md-3">{ restaurant.address } </p>
                                            <a className="col-sm-12 col-md-3" href={restaurant.website_url} target="_blank">Go to restaurant website </a>
                                        </div>
                                        <div className="card-body">Check the dishes we have!
                                            <DishCardCarousel
                                            // id={restaurant[0]}
                                            // dishes={dishes}
                                            />
                                        </div>
                                    </div>

                                ))
                            }
                            
                    </div>
                </div>
                
                <div className="row justify-content-center">
                Not found what you were looking for? Maybe it's time to upload the delicious dish and the restaurant where you ate it here.
                    </div>
                {/* <FormRestaurantCard 
                    // name={name}
                    // address={address}
                    // opening={opening}
                    // url={url}
                    // onChange={this.handleInputChange}
                    // onSubmit={this.addItem}
                /> */}
            </div>
                    
                
            
        );
    }
}


