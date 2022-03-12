import React, { useState } from 'react';

// Tasks of the day
// Implement at least 2 components of your components diagram (both on functional and class syntaxes)
// Implement events on each component (at least "onclick" both on functional an class syntaxes)
// Implement rudimentary styling on each component
// Add state management to each component (check "state" on video resources)
// Define Props for every component in the app

// Functional component 
const RegisterProduct = (props) => {
    
    // States
    const [submitValue, setSubmitValue] = useState('Submit');

    // Events
    function handleSubmit(event) {
        setSubmitValue('Submited!')
        setTimeout(() => {
            alert('Register product Succesfully!')
        },10)
    }

    //Styling in index.css
    return(
        <div className='registerProductCard'>
            <div className='card'>
                <div className='container'>
                    <h1>Hi {props.username}, Register your product</h1>
                    <form onSubmit={handleSubmit}> 
                        <label for='productName'>Name: </label>
                        <input type="text" id="productName" name="productName" />

                        <label for='productDescription'>Description: </label>
                        <input type="text" id="productDescription" name="productDescription" />

                        <label for='productContractAddress'>Contract Address: </label>
                        <input type="text" id="productContractAddress" name="productContractAddress" />

                        <label for='productPrice'>Price: </label>
                        <input type="number" id="productPrice" name="productPrice" />

                        <label for='productCurrency'>Currency: </label>
                        <select id="productCurrency" name="productCurrency">
                            <option value="ETH">ETH</option>
                            <option value="BTC">BTC</option>
                            <option value="SOL">SOL</option>
                        </select>
                            
                        <input type="submit" value={submitValue} />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default RegisterProduct;