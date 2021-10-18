import React from 'react';
import HeaderLogo from '../images/mainlogo.png'

function Header(){
    return(
        <>
        <div className="header">
            <img src={HeaderLogo} alt="Header logo"></img>
            <h4>Keep</h4>
        </div>
        <hr></hr>
        </>
    );
}

export default Header;