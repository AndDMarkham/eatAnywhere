import React, { Component } from 'react';
import DishCardCarousel from './DishCardCarousel';
//import RestaurantCard from './RestaurantCard';
import FormRestaurantCard from './FormRestaurantCard';


export default class RestaurantCardList extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          restaurants : [
            {
              name: 'U Bansethu',
              address: '123 prague 3',
              opening: '11-24 daily',
              url: 'https://www.ubansethu.cz/en/'
            },
            { 
              name: 'BeerGeek',
              address: '456 Prague 2',
              opening: '16-1 daily',
              url: 'https://beergeek.cz/en/'
              
            },
          ]
        }
      }
    
//       /**
//    * Handle input changes in the AddItem component.
//    * @param event
//    */
//   handleInputChange = event => {
//     const target = event.target;
//     const value = target.value;
//     const name = target.name;
//     this.setState({
//       [name]: value
//     });
//   };

//   /**
//    * Add an item to state.
//    * @param event
//    */
//   addItem = event => {
//     event.preventDefault();
//     const {name, address, opening, url} = this.state;
//     const itemsInState = this.state.items;
//     const itemsArrayLength = itemsInState.length;
//     const id = itemsArrayLength ? (itemsInState[itemsArrayLength - 1].id + 1) : 1;
//     this.setState({
//       items: [
//         ...itemsInState,
//         Object.assign({}, {
//           id,
//           name,
//           address,
//           opening,
//           url
//         })
//       ],
//       name: "",
//       address: "",
//       opening: "",
//       url: ""
      
//     })
//   };

      
    render() {
        return (

            
        
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-12">
                            {
                                    this.state.restaurants.map(restaurant => (
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