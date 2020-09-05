import React from 'react';

const time = props => {
    const {format, style, timestamp} = props;
    const time = timestamp => new Date(timestamp).toLocaleTimeString([], format );

return  <p style={style} className="mt-3n">
        {(time(timestamp)[0]) === '0' ? time(timestamp)
        .slice(1).replace(/\s/g, "")
        .replace("AM","am").replace("PM","pm") : 
        time(timestamp).replace(/\s/g, "")
        .replace("AM","am")
        .replace("PM","pm")} 
        </p>
}

export default time;