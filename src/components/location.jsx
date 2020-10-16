import React from 'react';
import Time from './common/time';

const Location = props => {

        const { timestamp } = props.position;
        const timeStyle = {
            marginBottom: "0px",
            display: "inline",
        };

        const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
        const day = dt => new Date(dt).getDay();

        return (
            !timestamp ? null :
            <React.Fragment>
                <div className="row mb-4 mt-n4 d-none d-sm-block">
                    <div className="col-md-6">
                        <h3>{props.location.city}</h3>
                        <span>
                            {weekday[day(timestamp)]}, <Time style={timeStyle} timestamp={timestamp} format={{ hour: "2-digit", minute: "2-digit" }}/>
                        </span>
                    </div>
                </div>
                
                <nav className="bg-white navbar navbar-expand-lg navbar-light bg-light d-block d-sm-none">
                    <ul className="nav navbar-nav navbar-logo mx-auto">
                        <li className="nav-item text-center">
                            <h1 className="font-weight-light">
                                {props.location.city}
                            </h1>
                            <span>
                                {weekday[day(timestamp)]}, <Time style={timeStyle} timestamp={timestamp} format={{ hour: "2-digit", minute: "2-digit" }}/>
                            </span>
                        </li>
                    </ul> 
                </nav>

            </React.Fragment>
        )
    
};

export default Location;
