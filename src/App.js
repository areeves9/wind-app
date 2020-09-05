import React, { Component } from 'react';

import Current from './components/current';
import Details from './components/details';
import Location from './components/location';
import Hourly from './components/hourly';
import Precipitation from './components/precipitation';
import Forecast from './components/forecast';



class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            position: {},
            current: {},
            daily: [],
            hourly: [],
            location: {},
            today: {},
            isLoading: false,
            error: null,

        };
        
        this.navigator = this.navigator.bind(this);
        this.getSiteData = this.getSiteData.bind(this);
        this.error = this.error.bind(this);
       
    };

    componentDidMount() {
        this.navigator(this.getSiteData); 
    };
    
    getSiteData() {
        Promise.all([
            fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${this.state.position.coords.latitude}&lon=${this.state.position.coords.longitude}&exclude={part}&appid=${process.env.REACT_APP_OW_API_APPID}`),
            fetch(`https://revgeocode.search.hereapi.com/v1/revgeocode?at=${this.state.position.coords.latitude},${this.state.position.coords.longitude}&apiKey=${process.env.REACT_APP_HERE_API_KEY}`)
        ]).then(responses => Promise.all(responses.map(response => {
          return response.json();
        })).then(data => {
            const openWeatherData = data[0];
            const {current, daily} = openWeatherData;
            const hourly = openWeatherData.hourly.slice(0, 24)
            const today = daily[0];
            
            const hereData = data[1];

            console.log(daily)
            this.setState({ 
                current,
                today,
                hourly, 
                daily,
                location: hereData.items[0].address,
                isLoading: false,
            });
        }).catch(error => {
          this.setState({ error, isLoading: false });
        }));
    };

    navigator(callback) {
        this.setState({ isLoading: true });
        if(!navigator.geolocation) {
            this.setState({ error: `Geolocation not supported by your browser.`, isLoading: false });
        } else {
            navigator.geolocation.getCurrentPosition((position, error) => {
                this.setState({ position });
                callback();
            });
        };
    };

     error(err) {
        this.setState({ error: err, isLoading: false })
    };

    render() {
        const { 
            current,
            hourly,
            daily,
            today,
            location,
            position,
            error,
            isLoading 
        } = this.state;
      
        if (isLoading) {
            return (
                <div style={{ alignItems: 'center', display: 'flex', height: '100%', width: '100%', top: '0', position: 'fixed' }} className="row">
                    <div 
                    style={{ width: '5rem', height: '5rem'}} 
                    className="spinner-grow text-secondary d-flex mx-auto" role="status">
                    </div>
                </div>
            )
        };

        if (error) {
            return <p className="text-center">Something went wrong.</p>;
        };

        return <React.Fragment>
                {location && position && <Location location={location} position={position} />}
                {current && today && <Current current={current} today={today} />}
                {hourly && <Hourly hourly={hourly} />}
                {current && <Details current={current} />}
                {hourly && <Precipitation hourly={hourly} />}
                {daily && <Forecast daily={daily} />}
            </React.Fragment>
    };
};

export default App;