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

    const renderCards = hourly.map((h, index) =>
        <div key={h.dt*(3.14)} className="col-2 mt-2 ml-n1 mb-2 p-0">
            <div className="card border-0" style={{ width: "auto", textAlign: "center" }}>
                <div className="card-body p-0">
                    {index === 0 ? <p style={{ fontWeight: "bold" }} className="mt-3n">Now</p> :
                    <Time timestamp={(h.dt*1000)} style={timeStyle} format={{ hour: "2-digit" }}/>}
                    <Icon style={style} weather={h.weather} />
                    <Temperature style={(index === 0) ? {fontWeight: "bold", marginBottom: "-0.2rem"} : tempStyle} temp={h.temp.toFixed(0)} />
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