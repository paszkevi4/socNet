import React from 'react';
import fetchingCircle from "../../../images/fetching.svg";

let Preloader = (props) => {
    return (
        <div>
            <img src={fetchingCircle} />
        </div>
    )
}

export default Preloader;