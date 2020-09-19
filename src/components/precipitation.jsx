import React from 'react';
import LinearPlot from './common/linearPlot';

const Precipitation = props => {
    const { hourly } = props;
    const precipitation = [hourly.map(h => (h.pop*100).toFixed(0))];
    const time = [hourly.map(h => h.dt)];
    return (
            <React.Fragment>
            <div className="col-12 col-md-6 col-lg-4 mt-4">
                <div className="card border-0 d-block d-sm-none">
                    <div className="card-body">
                        <h5 className="card-title">Precipitation</h5>
                        <LinearPlot precipitation={precipitation[0]} time={time} />
                    </div>
                </div>
                <div className="card d-none d-sm-block">
                    <div className="card-body">
                        <h5 className="card-title">Precipitation</h5>
                        <LinearPlot precipitation={precipitation[0]} time={time} />
                    </div>
                </div>
            </div>

            <div className="col-12 col-md-6 col-lg-4 mt-4">
                <div className="card border-0 d-none">
                    <div className="card-body">
                    </div>
                </div>
            </div>

            </React.Fragment>
            
    )
};

export default Precipitation;