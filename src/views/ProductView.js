import React from 'react';
import Navbar from '../components/navbar';
import ProductList from '../components/productList';
import Main from '../components/main';
import Footer from '../components/footer';


class ProductView extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            products: this.props.products,
        }
    }

    render() {
        return(
            <>
                <Main>
                    <ProductList products={this.state.products}/>
                </Main>
            </>
        )
    }
}

export default ProductView;