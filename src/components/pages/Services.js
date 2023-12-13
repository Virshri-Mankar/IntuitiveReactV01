import React from 'react';
import {Link, Outlet} from 'react-router-dom';

function Services(){
    return(
        <div>
        <h2>Services page</h2>
        <h2>We r offering some other services</h2>
        <Link to="service1">Service1</Link>
        <Link to="service2">Service2</Link>
        <Link to="service3">Service3</Link>
        <Outlet />
        </div>

    );
}

export default Services;