import React from 'react';

const ProductCard = (props) => {

    function handleClick() {
        window.open("https://opensea.io/");
    }

    return(
        <div className='productCard' onClick={handleClick}>
            <div className='card'>
                <img src={props.productImg}></img>
                <div className='container'>
                    <h4><b>{props.productName}</b></h4>
                    <p>{props.productDesc}</p>
                    <h3>{props.productPrice}</h3>
                </div>
            </div>
        </div>
    )
}

export default ProductCard