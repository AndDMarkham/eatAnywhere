import React from 'react';
import ReactDOM from 'react-dom';
import MapContainer from './MapContainer';
import Login from './Login';
import './index.scss';
import Profile from './Profile';

export default class App extends React.Component {
    render(){
        return (
           <div className="homepage">
                {/* <div className="login">
                    <Login/>
                </div> */}
                <div className="profile">
                    <Profile />
                </div>
                
                <div>
                    <MapContainer/>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('react-app'));