import React from 'react';
import LinearPlot from './common/linearPlot';

const Precipitation = props => {
    const { hourly } = props;
    const precipitation = [hourly.map(h => (h.pop*100).toFixed(0))];
    const time = [hourly.map(h => h.dt)];
    return (
        <div className="container-fluid mb-5">
            <div className="row">
                <div className="col-12">
                    <h3>Precipitation</h3>
                    <LinearPlot precipitation={precipitation[0]} time={time} />
                </div>
            </div>
        </div>
    )
};

export default Precipitation;