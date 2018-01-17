import React from 'react';

export default function FailedLogin(){
    return (
        <div>
            Username or Password weren't able to authenticate. Please <a href={process.env.REACT_APP_LOGIN} className="navlinks">try again.<div> className="line"></div></a>
        </div>
    )
}