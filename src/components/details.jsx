import React from 'react';
import Detail from './common/detail';

const Details = props => {
    const { current } = props;
    const { 
        dew_point,
        feels_like, 
        humidity, 
        pressure,
        visibility,
        wind_speed, 
    } = current;
    
    return (
        !pressure ? null :
          <React.Fragment>
            <Detail iconClassName={`wi wi-humidity`} detail={`${humidity}%`} textString={`Humidity`} />
            <Detail iconClassName={`wi wi-thermometer`} detail={(feels_like).toFixed(0) + `°`} textString={`Feels Like`} />              
            <Detail iconClassName={`wi wi-barometer`} detail={`${(pressure*0.03).toFixed(2)} in`} textString={`Pressure`} />
            <Detail iconClassName={`wi wi-windy`} detail={`${(wind_speed).toFixed(0)} mph`} textString={`Wind`} />
            <Detail iconClassName={`wi wi-raindrops`} detail={(dew_point).toFixed(0) + `°`} textString={`Dew Point`} />
            <Detail iconClassName={`wi wi-stars`} detail={`${(visibility*0.000621371).toFixed(0)} mi`} textString={`Visibility`} />
          </React.Fragment>

    )
};

export default Details;