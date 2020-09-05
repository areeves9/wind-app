import React from 'react';
import { convertKtoF } from '../../util/convertKtoF.js';

const Temperature = props => {
    const { temp, style } = props;
    return <span style={style}>{temp && convertKtoF(temp)}</span>
};

export default Temperature;