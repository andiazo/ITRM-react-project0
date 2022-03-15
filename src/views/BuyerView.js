import React from 'react';
import Navbar from '../components/navbar';
import RegisterProduct from '../components/registerProduct';
import Main from '../components/main';
import Footer from '../components/footer';


class BuyerView extends React.Component {
    render() {
        return(
            <>
                <Navbar />
                <Main>
                    <RegisterProduct />
                </Main>
                <Footer />
            </>
        )
    }
}

export default BuyerView;