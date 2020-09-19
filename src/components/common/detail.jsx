import React from 'react';

const Detail = props => {
    const {textString, detail, iconClassName} = props;
    return (
        <div className="card m-1 bg-light" style={{ width: "7rem", height: "auto" }}>
            <div className="text-center card-body">
                <p style={{ fontSize: "2rem" }}>
                    <i className={iconClassName}></i>
                </p>
                <p className="card-text text-muted mt-n3" style={{ fontSize: "15px", fontWeight: "400" }}>{textString}</p>
                <p className="text-dark" style={{ fontWeight: "bold" }}>{detail}</p>                    
            </div>
        </div> 
    )
}

export default Detail;