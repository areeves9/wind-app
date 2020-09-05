import React from 'react';
import Icon from './icon';
import Temperature from './temperature';


const ForecastItem = props => {
    const {weather, dt, temp} = props;
    const iconStyle = {
        fontSize: "1.2rem",
        textAlign: "center",
        marginTop: "auto",
        marginBottom: "auto",
        float: "right",
    };
    const tempStyle = {
        paddingRight: "1rem",
        float: "left"
    };
    const tempStyle1 = {
        color: "#6c757d",
        float: "right",
    };

    const weekday = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    const day = dt => new Date(dt*1000).getDay();

    return (
        <li className="list-group-item border-0 mb-n3">
            <div style={{position: "relative"}} className="row">
                <div style={{ position: "relative" }} className="col-7">
                    <p style={{ position: "absolute", left: "-5px", fontWeight: "600" }} className="mb-n4"> 
                        {weekday[day(dt)]}
                    </p>
                    <Icon style={iconStyle} weather={weather} />    
                </div>
                <div style={{ position: "absolute", right: "-1rem" }} className="col-4">
                    <p style={{ fontWeight: "600" }} className="">
                        <Temperature style={tempStyle} temp={temp.min} />
                        <Temperature style={tempStyle1} temp={temp.max} />
                    </p>
                </div> 
            </div>
        </li>
    )
        

};

export default ForecastItem;