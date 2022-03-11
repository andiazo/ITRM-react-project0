import React, { useState } from 'react';

const Footer = () => {
    
    const [buttonText, setButtonText] = useState(true);
    
    const [promise, setPromise] = useState('Sin promesa');

    let newPromise = new Promise((resolve, reject) => {
        resolve('Promesa resuelta');
    })    

    newPromise.then( result => {
        setPromise(result)
     }, function(error) {
        setPromise(error)
     });


    function handleClick() {
        setButtonText(!buttonText)
    }

    return(
        <div className='footer'>
            COPYRIGHT © 2021 ITRM | ALL RIGHTS RESERVED | 
            <button onClick={handleClick}>{buttonText? 'Don\'t click on me!': 'Bitcoin to the moon'}</button>
            <div>Promesa: {promise}</div>
        </div>
    )
}

export default Footer;