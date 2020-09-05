import React from 'react';
import HourCards from './hourCards';

const Hourly = props => {
    const { hourly } = props;
    const iconStyle = {
        fontSize: "1.5rem",
    };

    return (
    <React.Fragment>
        { hourly && 
        <div className="container-fluid">
            <div className="border border-muted border-left-0 border-right-0 d-flex flex-row flex-nowrap" style={{overflowX: "auto", overflowY: "hidden"}}>
                <HourCards style={iconStyle} hourly={hourly.slice(0, 24)} />
            </div>
        </div>}
    </React.Fragment>
    )
};

export default Hourly;