import React from 'react';
import Navbar from '../components/navbar';
import ProductList from '../components/productList';
import Main from '../components/main';
import Footer from '../components/footer';


class ProductView extends React.Component {
    render() {
        return(
            <>
                <Main>
                    <ProductList />
                </Main>
            </>
        )
    }
}

export default ProductView;