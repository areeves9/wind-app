import React from 'react';

const nightOrDay = arr => arr[0].icon.charAt(arr[0].icon.length - 1) === "n" ? "night" : "day";

const Icon = props => {
    const { weather, style } = props;

    return (
        <p style={style}>
            { weather && <i className={`wi wi-owm-${nightOrDay(weather)}-${weather[0].id}`}></i>}  
        </p>
    )
};

export default Icon;