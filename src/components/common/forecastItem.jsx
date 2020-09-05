import React from 'react';
import Icon from './icon';

const ForecastItem = props => {
    const {weather, dt} = props;
    const iconStyle = {
        fontSize: "1rem",
        textAlign: "center",
        marginTop: "auto",
        marginBottom: "auto",
    };

    const d = dt => new Date(dt*1000).getDay();

    return (
        <li className="list-group-item">
                <div className="my-auto col-4 text-left ">
                    <span className="">
                        {d(dt)}
                    </span>
                </div>
                <div className="col-4 mx-auto">
                    <Icon style={iconStyle} weather={weather} />    
                </div> 
        </li>
    )
        

};

export default ForecastItem;