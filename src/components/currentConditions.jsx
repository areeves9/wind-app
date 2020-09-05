import React from 'react';
import Icon from './common/icon';
import Description from './common/description';
import Temperature from './common/temperature';

const CurrentConditions = props => {
    const {weather, currentTemp, today} = props;
    const {main} = weather[0];
    const {min, max} = today.temp;

    const ulStyle = {
        position: "absolute",
        top: "1rem",
    };
    const descStyle = {
        fontSize: "2rem",
    };
    const iconStyle = {
        fontSize: "2.8rem",
    };

    const currentTempStyle = {
        fontSize: "8rem",
    };

    const minMaxStyle = {
        fontSize: '1.5rem',
        fontWeight: 'light',
    }
    

    return (
        <React.Fragment>
            <nav style={{ listStyleType: "none", position: "relative" }} className="navbar navbar-light bg-white border-0 mt-5">
                <ul style={ulStyle} className="mr-auto list-group list-group-horizontal border-0">
                    <li className="p-0 pr-1 list-group-item  border-0">
                        {weather && <Icon style={iconStyle} weather={weather} />}
                    </li>
                    <li className="list-group-item  border-0">
                        {main && <Description style={descStyle} main={main} />}
                    </li>
                </ul>
            </nav>
            <div className="row mb-5 mt-3">
                <div className="col-8">
                    {currentTemp && <Temperature style={currentTempStyle} temp={currentTemp} />}
                </div>
                <div className="col-4 text-center my-auto">
                    {min && <Temperature style={minMaxStyle} temp={min} />}
                    <br></br>
                    <hr style={{ borderTop: "solid black 1px", width: "60%" }}></hr>
                    {max && <Temperature style={minMaxStyle} temp={max} />}
                </div>
            </div>
        </React.Fragment >
    ) 
};

export default CurrentConditions;