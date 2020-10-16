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
        const { coords } = this.state.position;

        Promise.all([
            fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${coords.latitude}&lon=${coords.longitude}&exclude={part}&appid=${process.env.REACT_APP_OW_API_APPID}&units=${this.state.units}`),
            fetch(`https://revgeocode.search.hereapi.com/v1/revgeocode?at=${coords.latitude},${coords.longitude}&apiKey=${process.env.REACT_APP_HERE_API_KEY}`)
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
                <div className="container-fluid d-block d-sm-none">
                    {location && position && <Location location={location} position={position} />}
                    {current && today && <Current current={current} today={today} />}
                </div>

                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <div className="col-md-6 col-lg-8 d-none d-sm-block">
                            {current && today && <Current current={current} today={today} />}
                            {location && position && <Location location={location} position={position} />}
                        </div>
                        <div className="col-md-6 col-lg-8 d-none d-sm-block">
                           
                        </div>
                    </div>

                    <div className="row justify-content-center">
                        <div className="col-12 d-block d-sm-none">
                            {hourly && <Hourly current={current} hourly={hourly} />}
                            {daily && <Forecast daily={daily} />}
                        </div>


                        <div className="col-md-6 col-lg-4 d-none d-sm-block">
                            <div className="card">
                                <div className="card-body">
                                <h5 className="card-title">Forecast</h5>
                                    {hourly && <Hourly current={current} hourly={hourly} />}
                                    {daily && <Forecast daily={daily} />}
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-4 d-none d-sm-block">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Details</h5>
                                    <div className="row justify-content-center align-items-center">
                                        {current && <Details current={current} />}
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="container-fluid d-block d-sm-none">
                    <h5 className="mt-5">Details</h5>
                    <div className="row justify-content-center align-items-centerow">
                        {current && <Details current={current} />}
                    </div>
                </div>

                <div className="container-fluid">
                    <div className="row justify-content-center">
                        {hourly && <Precipitation hourly={hourly} />}
                    </div>
                </div>
            </React.Fragment>
    };
};

export default App;