import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Protected(props)
{
    const {Component} = props;
    const navigate = useNavigate();

    useEffect(()=>{
        let login = localStorage.getItem('login');
        if(!login){
            navigate('login');
        }
    })


    return(
        <div>
        <h2>Protected in  page </h2>
        <Component/>
        
        </div>
    );
}

export default Protected;