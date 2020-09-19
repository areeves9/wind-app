import React from 'react';
import Time from './common/time';

const Location = props => {

        const { timestamp } = props.position;
        const timeStyle = {
            marginBottom: "0px",
            display: "inline",
        };

        const weekday = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"]
        const day = dt => new Date(dt).getDay();

        return (
            !timestamp ? null :            
            <nav className="bg-white navbar navbar-expand-lg navbar-light bg-light">
                <ul className="nav navbar-nav navbar-logo mx-auto">
                    <li className="nav-item text-center">
                        <h1 className="font-weight-light">
                            {props.location.city}
                        </h1>
                        <span>{weekday[day(timestamp)]}, <Time style={timeStyle} timestamp={timestamp} format={{ hour: "2-digit", minute: "2-digit" }}/>
                        </span>
                    </li>
                </ul> 
            </nav>
        )
    
};

export default Location;
