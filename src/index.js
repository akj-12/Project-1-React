import React from 'react'
import ReactDOM from 'react-dom'
import SeasonDisplay from './SeasonDisplay'
import Spinner from './Spinner';

class App extends React.Component{
    // State 
    state  = {lat:null , errMessage:''}
    componentDidMount() {
        // Loading Data 
        window.navigator.geolocation.getCurrentPosition(
            (Position) => {
                this.setState({
                    lat:Position.coords.latitude
                });
            },
            (err) => {
                this.setState({
                    errMessage:err.message
                })
            }
        );
    };
    renderComponent() {
        if (this.state.errMessage) {
            return (
                <div>
                    Error : {this.state.errMessage}
                </div>
            );
        }
        if (this.state.lat) {
            return (
                <SeasonDisplay lat={this.state.lat}/>
            );
        }
        return <Spinner message="Please accept location request."/>
    }
    render(){
        return (
            <div className="border red">
                {this.renderComponent()}
            </div>
        );
    }
    
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);