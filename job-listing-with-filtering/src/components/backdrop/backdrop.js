import React from 'react';



const backdrop = (props) => {
    return (
        <div> {props.showState && props.errorState ? <div className="backdrop"></div> : null}</div>
    )
};

export default backdrop; 