import React from 'react';
import Icon from './common/icon';
import Time from './common/time';
import Temperature from './common/temperature';

const HourCards = props => {
    const { hourly, style } = props;
    
    const timeStyle = {
        fontWeight: "bold"
    }
    
    const tempStyle = {
        marginBottom: "-0.2rem",
    };

    const renderCards = hourly.map(h =>
        <div key={h.dt*(3.14)} className="col-2 mt-2 ml-n1 mb-2 p-0">
            <div className="card border-0" style={{ width: "auto", textAlign: "center" }}>
                <div className="card-body p-0">
                    <Time timestamp={(h.dt*1000)} style={timeStyle} format={{ hour: "2-digit" }}/>
                    <Icon style={style} weather={h.weather} />
                    <Temperature style={tempStyle} temp={h.temp} />
                </div>    
            </div>
        </div>
    );

    return (
        <React.Fragment>
        {renderCards}
        </React.Fragment>
    )
};

export default HourCards;