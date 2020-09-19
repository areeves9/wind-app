import React from 'react';
import ForecastItem from './common/forecastItem';


const Forecast = props => {
    return ( 
            <div className="row justify-content-center align-items-center">
                <div className="col-12 col-md-11">
                    <ul className="list-group list-group-flush">
                        {props.daily.map(day => <ForecastItem key={day.dt*3.14} dt={day.dt} weather={day.weather} temp={day.temp} />)}
                    </ul>
                </div>
            </div>
    ) 
};

export default Forecast;
