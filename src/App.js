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
            units: 'imperial',
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
            fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${this.state.position.coords.latitude}&lon=${this.state.position.coords.longitude}&exclude={part}&appid=${process.env.REACT_APP_OW_API_APPID}&units=${this.state.units}`),
            fetch(`https://revgeocode.search.hereapi.com/v1/revgeocode?at=${this.state.position.coords.latitude},${this.state.position.coords.longitude}&apiKey=${process.env.REACT_APP_HERE_API_KEY}`)
        ]).then(responses => Promise.all(responses.map(response => {
          return response.json();
        })).then(data => {
            const openWeatherData = data[0];
            const {current, daily} = openWeatherData;
            const hourly = openWeatherData.hourly.slice(0, 24)
            const today = daily[0];
            
            const hereData = data[1];

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
            return <p className="text-center">
                Something went wrong.
            </p>;
        };

        return <React.Fragment>
                {location && position && <Location location={location} position={position} />}
                {current && today && <Current current={current} today={today} />}
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 d-block d-sm-none">
                            {hourly && <Hourly current={current} hourly={hourly} />}
                            {daily && <Forecast daily={daily} />}
                        </div>
                        

                        <div className="col-md-6 col-lg-4 d-none d-sm-block">
                            <div className="card">
                                <div className="card-body">
                                <h5 class="card-title">Forecast</h5>
                                    {hourly && <Hourly current={current} hourly={hourly} />}
                                    {daily && <Forecast daily={daily} />}
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-4 d-none d-sm-block">
                            <div className="card">
                                <div className="card-body">
                                    <h5 class="card-title">Details</h5>
                                    <div className="row justify-content-center align-items-center">
                                        {current && <Details current={current} />}
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="container d-block d-sm-none">
                    <h3 className="mt-5">Details</h3>
                    <div className="row mb-5 justify-content-center align-items-centerow">
                        {current && <Details current={current} />}
                    </div>
                </div>

                {hourly && <Precipitation hourly={hourly} />}
            </React.Fragment>
    };
};

export default App;