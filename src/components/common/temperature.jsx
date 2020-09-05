import React from 'react';

const Temperature = props => {
    const { temp, style } = props;
    console.log();
    return <span style={style}>{temp && parseInt(temp).toFixed(0) + `°`}</span>
};

export default Temperature;