import React from 'react';
import Navbar from '../components/navbar';
import RegisterProduct from '../components/registerProduct';
import Main from '../components/main';
import Footer from '../components/footer';


class SellerView extends React.Component {
    render() {
        return(
            <>
                <Main>
                    <RegisterProduct />
                </Main>
            </>
        )
    }
}

export default SellerView;