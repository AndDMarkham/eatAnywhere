import React from 'react';
import ReactDOM from 'react-dom';
import MapContainer from './MapContainer';
import Login from './Login';
import './index.scss';
import Profile from './Profile';

export default class App extends React.Component {
    render(){
        return (
           <div className="row">
                {/* <div className="login">
                    <Login/>
                </div> */}
                <div className="profile col-sm-12 col-md-4">
                    <Profile />
                </div>
                
                <div className=" col-sm-12 col-md-8">
                    <MapContainer/>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('react-app'));