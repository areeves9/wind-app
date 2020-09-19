import React from 'react';
import HourCards from './hourCards';

const Hourly = props => {
    const { hourly, current } = props;

    return (
    <React.Fragment>
        { hourly &&
        <React.Fragment>
            <div className="border border-muted border-left-0 border-right-0 border-top-0 d-flex flex-row flex-nowrap" style={{overflowX: "auto", overflowY: "hidden"}}>
                <HourCards hourly={hourly.slice(0, 24)} temp={current.temp} />
            </div>
        </React.Fragment>
        }
    </React.Fragment>
    )
};

export default Hourly;