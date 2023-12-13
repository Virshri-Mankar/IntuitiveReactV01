import React from 'react';
import { useParams } from 'react-router-dom';

function User(){
    const params = useParams();
    const {name} = params;
    console.log(name);


    return(
        <div>
            <h2>User {name}'s page</h2>
        </div>
       
    );
}

export default User;