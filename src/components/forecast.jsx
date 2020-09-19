import React from 'react';
import ForecastItem from './common/forecastItem';

const day = dt => new Date(dt*1000).getDay();

const Forecast = props => {
    props.daily.map((d) => console.log(day(d.dt)));
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
