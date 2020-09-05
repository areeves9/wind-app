import React from 'react';
import CurrentConditions from './currentConditions';

const Current = props => {
    const { today } = props;
    const { weather, temp } = props.current;
    
    return (
            <div className="container">
                {weather && temp && today && <CurrentConditions currentTemp={temp} today={today} weather={weather} />}
            </div>
    )
};

export default Current;