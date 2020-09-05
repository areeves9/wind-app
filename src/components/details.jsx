import React from 'react';
import Temperature from './common/temperature';
import Detail from './common/detail';
import { convertKtoF } from '../util/convertKtoF';


/** 
 * Given "0-360" returns the nearest cardinal direction "N/NE/E/SE/S/SW/W/NW"  
 */
const getCardinal = angle => {
    /** 
     * Customize by changing the number of directions you have
     * We have 8
     */
    const degreePerDirection = 360 / 8;
  
    /** 
     * Offset the angle by half of the degrees per direction
     * Example: in 4 direction system North (320-45) becomes (0-90)
     */
    const offsetAngle = angle + degreePerDirection / 2;
  
    return (offsetAngle >= 0 * degreePerDirection && offsetAngle < 1 * degreePerDirection) ? "N"
      : (offsetAngle >= 1 * degreePerDirection && offsetAngle < 2 * degreePerDirection) ? "NE"
        : (offsetAngle >= 2 * degreePerDirection && offsetAngle < 3 * degreePerDirection) ? "E"
          : (offsetAngle >= 3 * degreePerDirection && offsetAngle < 4 * degreePerDirection) ? "SE"
            : (offsetAngle >= 4 * degreePerDirection && offsetAngle < 5 * degreePerDirection) ? "S"
              : (offsetAngle >= 5 * degreePerDirection && offsetAngle < 6 * degreePerDirection) ? "SW"
                : (offsetAngle >= 6 * degreePerDirection && offsetAngle < 7 * degreePerDirection) ? "W"
                  : "NW";

};

const Details = props => {
    const { current } = props;
    const { 
        dew_point,
        feels_like, 
        humidity, 
        pressure,
        visibility,
        wind_deg,
        wind_speed, 
    } = current;
    
    return (
        !pressure ? null : 
        <div className="container mt-5 mb-5">
            <h3 className="text-left">Details</h3>
            <div className="row justify-content-center align-items-center">
                <Detail iconClassName={`wi wi-humidity`} detail={`${humidity}%`} textString={`Humidity`} />
                <Detail iconClassName={`wi wi-thermometer`} detail={(feels_like).toFixed(0) + `°`} textString={`Feels Like`} />              
                <Detail iconClassName={`wi wi-barometer`} detail={`${(pressure*0.03).toFixed(2)} in`} textString={`Pressure`} />
                <Detail iconClassName={`wi wi-windy`} detail={`${(wind_speed).toFixed(0)} mph`} textString={`Wind`} />
                <Detail iconClassName={`wi wi-raindrops`} detail={(dew_point).toFixed(0) + `°`} textString={`Dew Point`} />
                <Detail iconClassName={`wi wi-stars`} detail={`${(visibility*0.000621371).toFixed(0)} mi`} textString={`Visibility`} />                 
            </div>
        </div>
    
    )
};

export default Details;