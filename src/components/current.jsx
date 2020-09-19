import React from 'react';
import CurrentConditions from './currentConditions';

const Current = props => {
    const { today } = props;
    const { weather, temp } = props.current;
    
    return (
        <React.Fragment>
            {weather && temp && today && <CurrentConditions currentTemp={temp} today={today} weather={weather} />}
        </React.Fragment>
    )
};

export default Current;