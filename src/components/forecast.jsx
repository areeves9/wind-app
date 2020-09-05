import React from 'react';
import ForecastItem from './common/forecastItem';

const Forecast = props => {

    return ( 
        <div className="container-fluid">
            <div className="row ">
                <div className="col-12">
                    <h3>Forecast</h3>
                    <ul className="list-group list-group-flush">
                         {props.daily.map(day => <ForecastItem key={day.dt*3.14} dt={day.dt} weather={day.weather} />)}
                    </ul>
                </div>
            </div>
        </div>
    ) 
};

export default Forecast;
