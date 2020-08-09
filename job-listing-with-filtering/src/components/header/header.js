import React from 'react';
import '../../styles/header.scss';

const cover = require('../../assets/bg-header-desktop.png'); 

const header = () => {
    return (
        <div className="header"> 
            <img src={cover} />
        </div>
    );
};

export default header;