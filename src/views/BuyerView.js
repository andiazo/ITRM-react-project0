import React from 'react';
import Main from '../components/main';
import Checkout from '../components/checkout';


class BuyerView extends React.Component {
    render() {
        return(
            <>
                <Main className='container'>
                    <Checkout />
                </Main>
            </>
        )
    }
}

export default BuyerView;