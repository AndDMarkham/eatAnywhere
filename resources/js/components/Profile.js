import React, {Component} from 'react';
import DietCardCarousel from './DietCardCarousel';

import './index.scss';

export default class Profile extends Component {
    render(){
        return (
           
           <div className="profile">
               <div >
                   <div className="userInfo">
                       <div className="picture">your pic</div>
                       <div>
                           <p className="userName">John Foodie</p>
                           
                       </div>
                   </div>
                   <p>Share your delicious dish with your fellow dietsters.</p>
                   <p>Search the restaurant where you ate it to find out if it has been uploaded yet, so that you can leave a picture and review</p>
                   <input type="text" placeholder="search restaurants"/>

               </div>
               <hr/>
               <h3>Dishes recommended for you!</h3>
               <div className="row">
                   <div className="card col-lg-12">
                       {/* <DietCardCarousel/> */}
                       
                       
                   </div>
               </div>
           </div>
        )
    }
}