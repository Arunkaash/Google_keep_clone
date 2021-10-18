import React from 'react';
import FooterImage from '../images/footer.png'

function Footer(){
const year = new Date().getFullYear();
    return(
        <>
        <div className="footer">
            <img src={FooterImage} alt="footer logo"></img>
            <h4>Copyrights © {year} Google,Inc</h4>
        </div>
        </>
    );
}

export default Footer;