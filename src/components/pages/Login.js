import React from 'react';
// import {useEffect} from 'react';
// import { useNavigate } from 'react-router-dom';

function Login()
{
    
    //  const login = ()=>{
    //     localStorage.setItem('login', true)
    //     navigate('/');
    //  }

    //  const navigate = useNavigate();
    //  useEffect(()=>{
    //     let login = localStorage.getItem('login');
    //     if(login){
    //         navigate('/');
    //     }
    // })

    return(
        <div>
        <h2>Login or Sign in  page </h2>
        <label>User Id</label>
        <input type="text" /> <br/>
        <label>Password</label>
        <input type="text" /> <br/>
        <button >Login</button>
        </div>
    );
}

export default Login;