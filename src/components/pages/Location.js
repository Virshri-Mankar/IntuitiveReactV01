import React from 'react';
import { useLocation } from 'react-router-dom';

function Location()
{
    
    const location = useLocation();
    console.log(location);
    return(
        <h2>useLocation hook is useing here </h2>
    );
}

export default Location;