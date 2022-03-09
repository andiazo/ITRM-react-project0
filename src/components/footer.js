import React, { useState } from 'react';

const Footer = () => {
    
    const [buttonText, setButtonText] = useState(true);
    
    function handleClick() {
        setButtonText(!buttonText)
    }

    return(
        <div className='footer'>
            COPYRIGHT © 2021 ITRM | ALL RIGHTS RESERVED | 
            <button onClick={handleClick}>{buttonText? 'Don\'t click on me!': 'Bitcoin to the moon'}</button>
        </div>
    )
}

export default Footer;